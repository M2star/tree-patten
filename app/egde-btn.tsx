import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";

import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import React, { useState } from "react";

export function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  ...rest
}: EdgeProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });



  const toggleModal = () => {
    console.log("hello");
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Render the edge */}
      <BaseEdge
        type="smoothstep"
        path={edgePath}
        
        markerEnd={markerEnd}
        style={style}
      />

      {/* Render the button on the edge */}
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan pointer-events-auto absolute"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          <Button onClick={toggleModal} size="icon" variant="secondary">
            <MousePointerClick size={16} />
          </Button>
          <div>
            {isModalOpen && (
              <div className="absolute inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h2 className="text-xl font-bold mb-4">Edge Actions</h2>
                  <p>
                    Edge with id: <strong>{id}</strong> has been clicked.
                  </p>
                  <div className="mt-4">
                    <Button variant="primary" onClick={toggleModal}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </EdgeLabelRenderer>

      {/* Render the modal */}
    </>
  );
}
