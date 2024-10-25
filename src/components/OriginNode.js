import { Handle } from "reactflow";
import { memo } from "react";

function OriginNode({ data }) {
  return (
    <div
      className={`flex h-32 w-32 items-center justify-center rounded-full text-center font-secondary text-2xl font-bold outline outline-offset-[100px] outline-primary-black/20 ${data.className}`}
    >
      <div>
        {data.handles.map((handle, index) => (
          <Handle
            key={index}
            id={handle.id}
            type={handle.type}
            position={handle.position}
            className={"opacity-0"}
          />
        ))}
      </div>
      <div>{data.label}</div>
    </div>
  );
}

export default memo(OriginNode);
