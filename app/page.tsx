"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { MdNotInterested } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

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
        {/* Start of the tree structure */}
        <span role="tree" aria-label="source tree" className="action">
          <div role="treeitem">
            {/* Tree group container */}
            <div
              role="group"
              className="grid relative action__container--grid grid-cols-[auto_auto] items-auto gap-0"
            >
              {/* First tree item with delay and action state */}
              <div role="tree-item" className="relative flex flex-col items-center">
                <div className="relative">
                  {/* Delay state */}
                  <div className="justify-center action-delay relative mb-[var(--vertical-offset)] flex flex-col items-center">
                    <Button className="text-center px-5">
                      <RiTimerLine className="mr-5" />
                      <span>1 day</span>
                    </Button>
                  </div>
                  {/* Action state */}
                  <div
                    aria-label="Sequence-branch state"
                    className="relative h-6 w-48 text-gray-400 mx-auto justify-center action-state mb-[var(--vertical-offset)] flex items-center gap-3"
                  >
                    <MdNotInterested />
                    <span className="action-state__text">
                      still not accepted
                    </span>
                  </div>
                </div>
                  <div>
                  <Button>
                    new sequence
                  </Button>
                </div>
              </div>

              {/* Second tree item with a button */}
              <div role="tree-item" className="absolute left-[calc(50%-var(--block-w)/2)]">
                <div className="bg-purple-600 border border-purple-600 rounded-tr-md rounded-b-sm w-[var(--block-w)] h-10 text-center cursor-default relative z-20">
                  <button
                    data-test="msg-action-btn"
                    aria-label="Click to open sequence-action config popup"
                    aria-haspopup="true"
                    className="flex items-center h-full absolute left-0 top-0 w-[calc(100%-20px)] z-10 pl-5 text-white"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="26"
                        viewBox="0 0 23 26"
                        aria-hidden="true"
                      >
                        <path
                          fill="white"
                          d="M9.3 1.5c2 0 3.4 1.5 3.4 3.4 0 2.1-1.5 3.8-3.4 3.8C7.5 8.7 6 7 6 5c0-2 1.5-3.4 3.4-3.4zM4.5 4.9c0 3 2.1 5.3 4.8 5.3 2.7 0 4.9-2.4 4.9-5.3C14.2 2.1 12 0 9.3 0S4.5 2.1 4.5 5zm4.8 7.8c5 0 7.6 2 7.9 5.8H1.5c.3-3.8 3-5.8 7.8-5.8zM18 20a.7.7 0 00.7-.7c0-5.2-3.3-8-9.3-8-6 0-9.3 2.8-9.3 8 0 .4.3.7.7.7z"
                        ></path>
                      </svg>
                    </span>
                    <span className="action-face__text"> Send an invite </span>
                  </button>
                </div>
              </div>

              {/* Third tree item with an accepted state */}
              <div role="tree-item" className="relative flex flex-col items-center">
                <div
                  aria-label="Sequence-branch state"
                  className="relative h-6 w-48 text-gray-400 mx-auto justify-center action-state mb-[var(--vertical-offset)] flex items-center gap-3"
                >
                  <MdNotInterested />
                  <span className="action-state__text"> Accepted</span>
                </div>
                <div className="relative">
                  <div className="w-40 action-delay relative mb-[var(--vertical-offset)] flex flex-col items-center">
                    <Button className="text-center px-5">
                      <RiTimerLine className="mr-5" />
                      <span>1 day</span>
                    </Button>
                  </div>
                </div>
                <div>
                  <Button>
                    new sequence
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
