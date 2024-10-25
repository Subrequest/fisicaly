import { Position } from "reactflow";

export default function handlePositionCorrection(position) {
  return {
    [Position.Top]: "!top-0",
    [Position.Right]: "!right-0",
    [Position.Bottom]: "!bottom-0",
    [Position.Left]: "!left-0",
  }[position];
}
