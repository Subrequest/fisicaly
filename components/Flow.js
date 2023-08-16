"use client";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Position,
} from "reactflow";
import { useMemo } from "react";
import ListNode from "@/components/ListNode";
import "reactflow/dist/style.css";
import RoundedNode from "@/components/RoundedNode";
import OriginNode from "@/components/OriginNode";
import * as Constant from "@/utils/constants";

import "reactflow/dist/style.css";

const listNodeDimensions = { width: 508, height: 144 };
const initialNodes = [
  {
    id: "intervention",
    type: "origin",
    position: { x: 0, y: 0 },
    data: {
      label: "Intervention",
      handles: [
        { type: "source", position: Position.Top, id: "top" },
        { type: "source", position: Position.Right, id: "right" },
        { type: "source", position: Position.Bottom, id: "bottom" },
        { type: "source", position: Position.Left, id: "left" },
      ],
    },
  },
  {
    id: "ressources-humaines",
    type: "rounded",
    position: { x: 0, y: -175 },
    data: {
      label: "Ressources humaines",
      className: "bg-primary-orange text-primary-white ring-primary-orange",
      handles: [
        { type: "target", position: Position.Bottom, id: "bottom" },
        { type: "source", position: Position.Top, id: "top" },
      ],
    },
  },
  {
    id: "employes",
    type: "rounded",
    position: { x: 175, y: 0 },
    data: {
      label: "Employés",
      className: "bg-secondary-yellow text-primary-white ring-secondary-yellow",
      handles: [
        { type: "target", position: Position.Left, id: "left" },
        { type: "source", position: Position.Right, id: "right" },
      ],
    },
  },
  {
    id: "entreprise",
    type: "rounded",
    position: { x: 0, y: 175 },
    data: {
      label: "Entreprise",
      className: "bg-primary-black text-primary-white ring-primary-black",
      handles: [
        { type: "target", position: Position.Top, id: "top" },
        { type: "source", position: Position.Bottom, id: "bottom" },
      ],
    },
  },
  {
    id: "prevention",
    type: "rounded",
    position: { x: -175, y: 0 },
    data: {
      label: "Prévention",
      className: "bg-secondary-blue text-primary-white ring-secondary-blue",
      handles: [
        { type: "target", position: Position.Right, id: "right" },
        { type: "source", position: Position.Left, id: "left" },
      ],
    },
  },
  {
    id: "rh-increase",
    type: "list",
    position: { x: -(100 + listNodeDimensions.width / 2), y: -375 },
    data: {
      label: "Augmentations constatées",
      items: ["Gestion", "Gain de temps", "Démarche RSE"],
      handles: [{ type: "target", position: Position.Bottom, id: "bottom" }],
      isReverse: true,
      colors: {
        border: "border-primary-orange",
        "bg/20": "bg-primary-orange/20",
        bg: "bg-primary-orange",
        "bg/10": "bg-primary-orange/10",
        text: "text-primary-orange",
      },
      arrowDirection: Constant.arrowDirection.INCREASE,
    },
  },
  {
    id: "rh-decrease",
    type: "list",
    position: { x: 100 + listNodeDimensions.width / 2, y: -375 },
    data: {
      label: "Réductions constatées",
      items: ["Absentéisme", "Accident de travail", "Turnover"],
      handles: [{ type: "target", position: Position.Bottom, id: "bottom" }],
      isReverse: false,
      colors: {
        border: "border-primary-orange",
        "bg/20": "bg-primary-orange/20",
        bg: "bg-primary-orange",
        "bg/10": "bg-primary-orange/10",
        text: "text-primary-orange",
      },
      arrowDirection: Constant.arrowDirection.DECREASE,
    },
  },
  {
    id: "em-increase",
    type: "list",
    position: { x: 575, y: -150 },
    data: {
      label: "Augmentations constatées",
      items: [
        "Motivation",
        "Sensation d'appartenance groupe",
        "Cohésion sociale",
        "Soft skill",
      ],
      handles: [{ type: "target", position: Position.Left, id: "left" }],
      isReverse: false,
      colors: {
        border: "border-secondary-yellow",
        "bg/20": "bg-secondary-yellow/20",
        bg: "bg-secondary-yellow",
        "bg/10": "bg-secondary-yellow/10",
        text: "text-secondary-yellow",
      },
      arrowDirection: Constant.arrowDirection.INCREASE,
    },
  },
  {
    id: "em-decrease",
    type: "list",
    position: { x: 575, y: 150 },
    data: {
      label: "Diminutions constatées",
      items: ["Stress"],
      handles: [{ type: "target", position: Position.Left, id: "left" }],
      isReverse: false,
      colors: {
        border: "border-secondary-yellow",
        "bg/20": "bg-secondary-yellow/20",
        bg: "bg-secondary-yellow",
        "bg/10": "bg-secondary-yellow/10",
        text: "text-secondary-yellow",
      },
      arrowDirection: Constant.arrowDirection.DECREASE,
    },
  },
  {
    id: "en-increase",
    type: "list",
    position: { x: -(100 + listNodeDimensions.width / 2), y: 375 },
    data: {
      label: "Augmentations constatées",
      items: ["Vision d'entreprise/image", "Rendement", "Économie"],
      handles: [{ type: "target", position: Position.Top, id: "top" }],
      isReverse: true,
      colors: {
        border: "border-primary-black",
        "bg/20": "bg-primary-black/20",
        bg: "bg-primary-black",
        "bg/10": "bg-primary-black/10",
        text: "text-primary-black",
      },
      arrowDirection: Constant.arrowDirection.INCREASE,
    },
  },
  {
    id: "en-decrease",
    type: "list",
    position: { x: 100 + listNodeDimensions.width / 2, y: 375 },
    data: {
      label: "Diminutions constatées",
      items: [
        "Coût de l'absentéisme et du turnover",
        "Charge mentale pour la direction",
      ],
      handles: [{ type: "target", position: Position.Top, id: "top" }],
      isReverse: false,
      colors: {
        border: "border-primary-black",
        "bg/20": "bg-primary-black/20",
        bg: "bg-primary-black",
        "bg/10": "bg-primary-black/10",
        text: "text-primary-black",
      },
      arrowDirection: Constant.arrowDirection.DECREASE,
    },
  },
  {
    id: "pr-increase",
    type: "list",
    position: { x: -(325 + listNodeDimensions.width / 2), y: -150 },
    data: {
      label: "Augmentations constatées",
      items: ["Facilite l'apprentissage", "Formation"],
      handles: [{ type: "target", position: Position.Right, id: "right" }],
      isReverse: true,
      colors: {
        border: "border-secondary-blue",
        "bg/20": "bg-secondary-blue/20",
        bg: "bg-secondary-blue",
        "bg/10": "bg-secondary-blue/10",
        text: "text-secondary-blue",
      },
      arrowDirection: Constant.arrowDirection.INCREASE,
    },
  },
  {
    id: "pr-decrease",
    type: "list",
    position: { x: -(325 + listNodeDimensions.width / 2), y: 150 },
    data: {
      label: "Diminutions constatées",
      items: ["Accident de travail", "Absentéisme", "Douleurs aigues"],
      handles: [{ type: "target", position: Position.Right, id: "right" }],
      isReverse: true,
      colors: {
        border: "border-secondary-blue",
        "bg/20": "bg-secondary-blue/20",
        bg: "bg-secondary-blue",
        "bg/10": "bg-secondary-blue/10",
        text: "text-secondary-blue",
      },
      arrowDirection: Constant.arrowDirection.DECREASE,
    },
  },
];

const initialEdges = [
  {
    id: "e-in-rh",
    source: "intervention",
    target: "ressources-humaines",
    sourceHandle: "top",
    targetHandle: "bottom",
    hidden: true,
  },
  {
    id: "e-in-em",
    source: "intervention",
    target: "employes",
    sourceHandle: "right",
    targetHandle: "left",
    hidden: true,
  },
  {
    id: "e-in-en",
    source: "intervention",
    target: "entreprise",
    sourceHandle: "bottom",
    targetHandle: "top",
    hidden: true,
  },
  {
    id: "e-in-pr",
    source: "intervention",
    target: "prevention",
    sourceHandle: "left",
    targetHandle: "right",
    hidden: true,
  },
  {
    id: "e-rh-inc",
    source: "ressources-humaines",
    target: "rh-increase",
    sourceHandle: "top",
    targetHandle: "left",
    type: "step",
  },
  {
    id: "e-rh-dec",
    source: "ressources-humaines",
    target: "rh-decrease",
    sourceHandle: "top",
    targetHandle: "left",
    type: "step",
  },
  {
    id: "e-em-inc",
    source: "employes",
    target: "em-increase",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
  },
  {
    id: "e-em-dec",
    source: "employes",
    target: "em-decrease",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
  },
  {
    id: "e-en-inc",
    source: "entreprise",
    target: "en-increase",
    sourceHandle: "bottom",
    targetHandle: "top",
    type: "step",
  },
  {
    id: "e-en-dec",
    source: "entreprise",
    target: "en-decrease",
    sourceHandle: "bottom",
    targetHandle: "top",
    type: "step",
  },
  {
    id: "e-pr-inc",
    source: "prevention",
    target: "pr-increase",
    sourceHandle: "left",
    targetHandle: "right",
    type: "step",
  },
  {
    id: "e-pr-dec",
    source: "prevention",
    target: "pr-decrease",
    sourceHandle: "left",
    targetHandle: "right",
    type: "step",
  },
];

export default function Flow({ className = "" }) {
  const nodeTypes = useMemo(
    () => ({ list: ListNode, rounded: RoundedNode, origin: OriginNode }),
    []
  );

  return (
    <div className={className}>
      <div className={"w-full aspect-video"}>
        <ReactFlow
          className={""}
          nodeTypes={nodeTypes}
          fitView={true}
          minZoom={0.5}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          nodes={initialNodes}
          edges={initialEdges}
          nodeOrigin={[0.5, 0.5]}
        >
          <Background gap={1000} variant={BackgroundVariant.Lines} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
