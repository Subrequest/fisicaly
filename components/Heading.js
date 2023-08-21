const Heading = {
  H1: ({ title, subtitle }) => (
    <h1
      className={"flex flex-col px-5 lg:px-8 border-l-4 border-primary-orange"}
    >
      <span
        className={
          "text-4xl sm:text-5xl md:text-6xl font-black mb-3 hyphens-manual md:hyphens-none"
        }
        dangerouslySetInnerHTML={{ __html: title }}
      ></span>
      <span className={"text-primary-orange font-medium text-xl md:text-2xl"}>
        {subtitle}
      </span>
    </h1>
  ),
  H2: ({ title, subtitle }) => (
    <h2
      className={"flex flex-col border-l-4 border-primary-orange px-5 lg:px-8"}
    >
      <span className={"text-4xl sm:text-5xl md:text-6xl font-black"}>
        {title}
      </span>
      <span
        className={
          "text-lg sm:text-xl md:text-2xl text-primary-black/40 [text-wrap:balance]"
        }
      >
        {subtitle}
      </span>
    </h2>
  ),
};

export default Heading;
