"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { MdNotInterested } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import ActionState, {
  ActionButton,
  TimerButton,
  Tree,
  TreeItemWrapper,
  TwoBranchTree,
} from "./tree";


import React from 'react';
import { MdNotInterested } from 'react-icons/md'; // Assuming you're using react-icons for MdNotInterested

// Define the structure of the tree and its branches
const tree = {
  type: "Tree",
  branches: [
    {
      type: "TwoBranchTree",
      items: [
        {
          type: "TreeItemWrapper",
          actionState: {
            icon: <MdNotInterested />, // Rendered icon
            text: "accepted"
          },
          timerButton: {
            label: "1"
          },
          tree:  {
            type: "Tree",  // Nested Tree structure inside this item
            branches: [
              {
                type: "TwoBranchTree",
                items: [
                  {
                    type: "TreeItemWrapper",
                    actionState: {
                      icon: <MdNotInterested />,
                      text: "accepted"
                    },
                    timerButton: {
                      label: "1"
                    }
                  },
                  {
                    type: "ActionButton",
                    label: "Action"
                  },
                  {
                    type: "TreeItemWrapper",
                    actionState: {
                      icon: <MdNotInterested />,
                      text: "accepted"
                    },
                    timerButton: {
                      label: "1"
                    },
                    button: {
                      label: "new sequence"
                    }
                  }
                ]
              }
            ]
          },
        },
       
        {
          type: "ActionButton",
          label: "Action"
        },
        {
          type: "TreeItemWrapper",
          actionState: {
            icon: <MdNotInterested />,
            text: "accepted"
          },
          timerButton: {
            label: "1"
          },
          button: {
            label: "new sequence"
          }
        }
      ]
    }
  ]
};




export default function Home() {
  // State to track if the user is currently dragging the element
  const [isDragging, setIsDragging] = useState(false);

  // State to store the current position of the draggable element
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Reference to track the starting point of the drag operation
  const dragRef = useRef(null);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true); // Set dragging to true
    // Store the starting drag position relative to the current element's position
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  // Handle mouse move event to update the position of the draggable element
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Do nothing if not dragging

    // Calculate the new position based on mouse movement
    const newX = e.clientX - dragRef.current.startX;
    const newY = e.clientY - dragRef.current.startY;

    // Update the position state
    setPosition({ x: newX, y: newY });
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false); // Set dragging to false
  };

  // Handle mouse leave event to stop dragging if the cursor leaves the container
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    // Main container to handle drag events
    <div
      className="flex items-center justify-center w-full h-full min-h-screen bg-gray-200 overflow-hidden relative transition-all duration-200 ease-in-out"
      onMouseMove={handleMouseMove} // Track mouse movements
      onMouseUp={handleMouseUp} // Stop dragging on mouse up
      onMouseLeave={handleMouseLeave} // Stop dragging on mouse leave
    >
      {/* Frame container that is draggable */}
      <div
        className="p-[50px] border-[1px] border-solid rounded-[10px] cursor-grab select-none flex items-center justify-center"
        style={{
          marginTop: "-1px",
          width: "500%", // Oversized frame to show draggable content
          height: "500%",
          borderColor: "transparent",
          willChange: "transform",
          transform: `translate(${position.x}px, ${position.y}px)`, // Apply drag position
        }}
        onMouseDown={handleMouseDown} // Start dragging on mouse down
      >
        <Tree>
          <TwoBranchTree>
            <TreeItemWrapper>
              <ActionState>
                <span>
                  <MdNotInterested />
                </span>
                <span className="action-state__text">accepted</span>
              </ActionState>
              <TimerButton label="1" />
              <div>
                <Button>new sequence</Button>
              </div>
            </TreeItemWrapper>
            <ActionButton>
                <span className="">Action</span>
              </ActionButton>
            <TreeItemWrapper>
              <TimerButton label="1" />
              <ActionState>
                <span>
                  <MdNotInterested />
                </span>
                <span className="action-state__text">accepted</span>
              </ActionState>
              <div>
                <Button>new sequence</Button>
              </div>
            </TreeItemWrapper>
          </TwoBranchTree>
        </Tree>
      </div>
    </div>
  );
}
