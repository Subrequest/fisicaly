export default function BackgroundGrid() {
  return (
    <div
      className={
        "absolute inset-x-0 z-[-1] grid h-full w-full px-5 md:grid-cols-2 lg:grid-cols-12"
      }
    >
      <div
        className={
          "hidden border-l border-primary-black/5 md:block lg:col-span-3"
        }
      ></div>
      <div
        className={
          "hidden border-l border-primary-black/5 lg:col-span-3 lg:block"
        }
      ></div>
      <div
        className={
          "hidden border-l border-primary-black/5 lg:col-span-3 lg:block"
        }
      ></div>
      <div className={"border-x border-primary-black/5 lg:col-span-3"}></div>
    </div>
  );
}
