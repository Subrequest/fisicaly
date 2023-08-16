import { Handle } from "reactflow";
import handlePositionCorrection from "@/utils/handlePositionCorrection";
import { memo } from "react";

function RoundedNode({ data }) {
  return (
    <div
      className={`text-center font-secondary uppercase font-bold tracking-wider rounded-full h-32 w-32 text-sm flex items-center justify-center ${data.additionnalClass}`}
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
