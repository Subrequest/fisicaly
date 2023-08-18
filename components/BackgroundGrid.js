export default function BackgroundGrid() {
  return (
    <div
      className={
        "grid md:grid-cols-2 lg:grid-cols-12 absolute h-full w-full left-0 right-0 px-5 z-[-1]"
      }
    >
      <div
        className={
          "hidden md:block lg:col-span-3 border-l border-primary-black/5"
        }
      ></div>
      <div
        className={
          "hidden lg:block lg:col-span-3 border-l border-primary-black/5"
        }
      ></div>
      <div
        className={
          "hidden lg:block lg:col-span-3 border-l border-primary-black/5"
        }
      ></div>
      <div className={"lg:col-span-3 border-x border-primary-black/5"}></div>
    </div>
  );
}
