import { Handle } from "reactflow";
import handlePositionCorrection from "@/utils/handlePositionCorrection";
import { memo } from "react";

function RoundedNode({ data }) {
  return (
    <div
      className={`flex h-32 w-32 items-center justify-center rounded-full text-center font-secondary text-sm font-bold uppercase tracking-wider ${data.className}`}
    >
      <div>
        {data.handles.map((handle, index) => (
          <Handle
            key={index}
            id={handle.id}
            type={handle.type}
            position={handle.position}
            className={`opacity-0 ${handlePositionCorrection(handle.position)}`}
          />
        ))}
      </div>
      <div>{data.label}</div>
    </div>
  );
}

export default memo(RoundedNode);
