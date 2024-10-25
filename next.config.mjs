import child_process from "child_process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  expireTime: 31536000, // 1 year
  experimental: {
    reactCompiler: true,
    ppr: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  deploymentId: Date.now().toString(),
  generateBuildId: async () => {
    return (
      process.env.SOURCE_COMMIT ||
      child_process
        .execSync('git log --pretty=format:"%h" -n1')
        .toString()
        .trim()
    );
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
