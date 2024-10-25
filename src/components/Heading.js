const Heading = {
  H1: ({ title, subtitle }) => (
    <h1
      className={"flex flex-col border-l-2 border-primary-orange px-5 lg:px-8"}
    >
      <span
        className={
          "mb-3 hyphens-manual text-4xl font-black sm:text-5xl md:hyphens-none md:text-6xl"
        }
        dangerouslySetInnerHTML={{ __html: title }}
      ></span>
      <span className={"text-xl font-medium text-primary-orange md:text-2xl"}>
        {subtitle}
      </span>
    </h1>
  ),
  H2: ({ title, subtitle }) => (
    <h2
      className={"flex flex-col border-l-2 border-primary-orange px-5 lg:px-8"}
    >
      <span className={"text-4xl font-black sm:text-5xl md:text-6xl"}>
        {title}
      </span>
      <span
        className={
          "text-lg text-primary-black/40 [text-wrap:balance] sm:text-xl md:text-2xl"
        }
      >
        {subtitle}
      </span>
    </h2>
  ),
};

export default Heading;
