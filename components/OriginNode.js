import { Handle } from "reactflow";
import { memo } from "react";

function OriginNode({ data }) {
  return (
    <div
      className={`rounded-full outline outline-primary-black/20 outline-offset-[100px] flex justify-center items-center h-32 w-32 text-center font-bold font-secondary text-2xl ${data.additionnalClass}`}
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
