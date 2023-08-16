import { Handle, Position } from "reactflow";
import Arrow from "@/public/images/Arrow.svg";
import * as Constant from "@/utils/constants";
import handlePositionCorrection from "@/utils/handlePositionCorrection";
import { memo } from "react";

function ListNode({ data }) {
  const arrowDirection = {
    [Constant.arrowDirection.INCREASE]: "-rotate-45",
    [Constant.arrowDirection.DECREASE]: "rotate-45",
  }[data.arrowDirection];

  return (
    <>
      <div
        className={`flex items-center h-36 gap-6 ${data.colors["bg/10"]} ${
          data.isReverse ? "rounded-r-full pl-6" : "rounded-l-full pr-6"
        }`}
      >
        <div
          className={`rounded-full h-full w-36 flex items-center justify-center ${
            data.colors["bg/20"]
          } ${data.isReverse ? "order-2" : "order-1"}`}
        >
          <div className={`p-2 rounded-full ${data.colors.bg}`}>
            <Arrow
              className={`h-6 w-6 text-white fill-current ${arrowDirection}`}
            />
          </div>
        </div>
        <div className={`${data.isReverse ? "order-1 text-right" : "order-2"}`}>
          <div className={"sr-only"}>{data.label}</div>
          <ul className={`${data.colors.text} font-medium w-80`}>
            {data.items.map((item, index) => (
              <li
                key={index}
                className={`${
                  index !== data.items.length - 1
                    ? `pb-1 mb-1 border-b ${data.colors.border}`
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {data.handles.map((handle, index) => {
          const handlePosition = {
            [Position.Bottom]: `${
              data.isReverse ? "!left-[calc(100%-15%)]" : "!left-[15%]"
            }`,
            [Position.Top]: `${
              data.isReverse ? "!left-[calc(100%-15%)]" : "!left-[15%]"
            }`,
          }[handle.position];

          return (
            <Handle
              key={index}
              id={handle.id}
              type={handle.type}
              position={handle.position}
              className={`opacity-0 ${handlePositionCorrection(
                handle.position
              )} ${handlePosition}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default memo(ListNode);
