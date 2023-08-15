"use client";
import ReactFlow from "reactflow";
import { useMemo } from "react";
import ListNode from "@/components/ListNode";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "intervention",
    position: { x: 0, y: 0 },
    data: { label: "Intervention" },
  },
  {
    id: "ressources-humaines",
    position: { x: 0, y: -100 },
    data: { label: "Ressources humaines" },
  },
  { id: "employes", position: { x: 200, y: 0 }, data: { label: "Employés" } },
  {
    id: "entreprise",
    position: { x: 0, y: 100 },
    data: { label: "Entreprise" },
  },
  {
    id: "prevention",
    position: { x: -200, y: 0 },
    data: { label: "Prévention" },
  },
  {
    id: "rh-gain",
    type: "list",
    position: { x: -200, y: -100 },
    data: { value: "Prévention" },
  },
];
const initialEdges = [
  { id: "e-rh-em", source: "ressources-humaines", target: "employes" },
  { id: "e-em-en", source: "employes", target: "entreprise" },
  { id: "e-en-pr", source: "entreprise", target: "prevention" },
  { id: "e-pr-rh", source: "prevention", target: "ressources-humaines" },
];

export default function Flow() {
  const nodeTypes = useMemo(() => ({ list: ListNode }), []);

  return (
    <div className={"w-full h-[3000px]"}>
      <section>
        <h2>Résultats observables</h2>
        <div>
          <h3>Ressources humaines</h3>
          <ul>
            <li>Gestion</li>
            <li>Gain de temps</li>
            <li>Démarche RSE</li>
          </ul>
          <ul>
            <li>Absentéisme</li>
            <li>Accident de travail</li>
            <li>Turnover</li>
          </ul>
        </div>

        <div>
          <h3>Employés</h3>
          <ul>
            <li>Motivation</li>
            <li>Sensation d'appartenance groupe</li>
            <li>Cohésion sociale</li>
            <li>Soft skill</li>
          </ul>
          <ul>
            <li>Stress</li>
          </ul>
        </div>

        <div>
          <h3>Entreprise</h3>
          <ul>
            <li>Coût de l'absentéisme et du turnover</li>
            <li>Charge mentale pour la direction</li>
          </ul>
          <ul>
            <li>Vision d'entreprise/image</li>
            <li>Rendement</li>
            <li>Économie</li>
          </ul>
        </div>

        <div>
          <h3>Prévention</h3>
          <ul>
            <li>Accident de travail</li>
            <li>Absentéisme</li>
            <li>Douleurs aigues</li>
          </ul>
          <ul>
            <li>Facilite l'apprentissage</li>
            <li>Formation</li>
          </ul>
        </div>
      </section>
      <ReactFlow
        nodeTypes={nodeTypes}
        elementsSelectable={false}
        nodesConnectable={false}
        nodesDraggable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnScrollMode={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        fitView={true}
        nodes={initialNodes}
        edges={initialEdges}
      />
    </div>
  );
}
