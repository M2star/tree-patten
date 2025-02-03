"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { MdNotInterested } from "react-icons/md";
import {
  ActionButton,
  TimerButton,
  Tree,
  TreeItemWrapper,
  TwoBranchTree,
  ActionState,
} from "./tree";

import React from "react"; // Assuming you're using react-icons for MdNotInterested
import { RiTimerLine } from "react-icons/ri";
import Nested from "./nested";

const tree = {
  type: "CONNECT",
  yesDelay: {
    value: 1,
    timeUnit: "DAYS",
  },
  noDelay: {
    value: 1,
    timeUnit: "DAYS",
  },
  message: "",
  subject: null,
  sequenceEndMode: null,
  triggerType: "INVITE_ACCEPTED",
  alternativeMessage: "",
  alternativeSubject: null,
  attachments: null,
  yes: {
    type: "MESSAGE",
    yesDelay: {
      value: 1,
      timeUnit: "DAYS",
    },
    noDelay: null,
    message: null,
    subject: null,
    sequenceEndMode: null,
    triggerType: null,
    alternativeMessage: "",
    alternativeSubject: null,
    attachments: {},
    yes: {
      type: "VISIT",
      yesDelay: {
        value: 1,
        timeUnit: "DAYS",
      },
      noDelay: null,
      message: null,
      subject: null,
      sequenceEndMode: null,
      triggerType: null,
      alternativeMessage: null,
      alternativeSubject: null,
      attachments: null,
      yes: {
        type: "ENDORSE",
        yesDelay: {
          value: 1,
          timeUnit: "DAYS",
        },
        noDelay: null,
        message: null,
        subject: null,
        sequenceEndMode: null,
        triggerType: null,
        alternativeMessage: null,
        alternativeSubject: null,
        attachments: null,
        yes: {
          type: "FOLLOW",
          yesDelay: {
            value: 1,
            timeUnit: "DAYS",
          },
          noDelay: null,
          message: null,
          subject: null,
          sequenceEndMode: null,
          triggerType: null,
          alternativeMessage: null,
          alternativeSubject: null,
          attachments: null,
          yes: {
            type: "IF_EMAIL_AVAILABLE",
            yesDelay: {
              value: 0,
              timeUnit: "DAYS",
            },
            noDelay: {
              value: 0,
              timeUnit: "DAYS",
            },
            message: null,
            subject: null,
            sequenceEndMode: null,
            triggerType: null,
            alternativeMessage: null,
            alternativeSubject: null,
            attachments: null,
            yes: {
              type: "EMAIL",
              yesDelay: {
                value: 1,
                timeUnit: "DAYS",
              },
              noDelay: null,
              message: "",
              subject: "",
              sequenceEndMode: null,
              triggerType: null,
              alternativeMessage: "",
              alternativeSubject: "",
              attachments: {},
              yes: null,
              no: null,
            },
            no: {
              type: "FIND_EMAIL",
              yesDelay: {
                value: 0,
                timeUnit: "DAYS",
              },
              noDelay: null,
              message: null,
              subject: null,
              sequenceEndMode: null,
              triggerType: null,
              alternativeMessage: null,
              alternativeSubject: null,
              attachments: null,
              yes: {
                type: "IF_EMAIL_AVAILABLE",
                yesDelay: {
                  value: 0,
                  timeUnit: "DAYS",
                },
                noDelay: {
                  value: 0,
                  timeUnit: "DAYS",
                },
                message: null,
                subject: null,
                sequenceEndMode: null,
                triggerType: null,
                alternativeMessage: null,
                alternativeSubject: null,
                attachments: null,
                yes: null,
                no: null,
              },
              no: null,
            },
          },
          no: null,
        },
        no: null,
      },
      no: null,
    },
    no: null,
  },
  no: {
    type: "INMAIL",
    yesDelay: {
      value: 1,
      timeUnit: "DAYS",
    },
    noDelay: {
      value: 1,
      timeUnit: "DAYS",
    },
    message: null,
    subject: "",
    sequenceEndMode: null,
    triggerType: "MESSAGE_RESPONDED",
    alternativeMessage: "",
    alternativeSubject: "",
    attachments: {},
    yes: {
      type: "WITHDRAW",
      yesDelay: {
        value: 21,
        timeUnit: "DAYS",
      },
      noDelay: null,
      message: null,
      subject: null,
      sequenceEndMode: null,
      triggerType: null,
      alternativeMessage: null,
      alternativeSubject: null,
      attachments: null,
      yes: {
        type: "CONNECT",
        yesDelay: {
          value: 1,
          timeUnit: "DAYS",
        },
        noDelay: {
          value: 1,
          timeUnit: "DAYS",
        },
        message: "",
        subject: null,
        sequenceEndMode: null,
        triggerType: "INVITE_ACCEPTED",
        alternativeMessage: "",
        alternativeSubject: null,
        attachments: null,
        yes: null,
        no: null,
      },
      no: null,
    },
    no: {
      type: "FOLLOW",
      yesDelay: {
        value: 1,
        timeUnit: "DAYS",
      },
      noDelay: null,
      message: null,
      subject: null,
      sequenceEndMode: null,
      triggerType: null,
      alternativeMessage: null,
      alternativeSubject: null,
      attachments: null,
      yes: null,
      no: null,
    },
  },
  templateName: "news",
  templateType: "INDIVIDUAL",
};

export default function Home() {
  // State to track if the user is currently dragging the element
  const [isDragging, setIsDragging] = useState(false);
  const [sequence, setSequence] = useState([0]);

  const handleAdd = () => {
    setSequence((prevSequence) => [...prevSequence, 0]);
  };

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
        <Nested data={tree} />
      </div>
    </div>
  );
}
