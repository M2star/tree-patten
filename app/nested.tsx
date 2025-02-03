import React from "react";

import {
  ActionButton,
  TimerButton,
  Tree,
  TreeItemWrapper,
  TwoBranchTree,
  ActionState,
} from "./tree";
import { RiTimerLine } from "react-icons/ri";
import { MdNotInterested } from "react-icons/md";
import { cn } from "@/lib/utils";
function Nested({ data }) {
  return (
    <span role="tree" aria-label="source tree" className="action">
      <div role="treeitem">
        <div
          role="group"
          className={cn(" relative items-auto gap-0", data.noDelay ? "grid action__container--grid grid-cols-[auto_auto] " : "flex flex-col items-center" )}
        >
          {/*main left brach */}
          <div role="tree-item" className="relative flex flex-col items-center">
            <div className="relative">
              <div className="w-40 action-delay relative mb-[var(--vertical-offset)] flex flex-col items-center">
                <button className="text-center px-5 flex items-center justify-center gap-2 bg-gray-300 p-3 rounded w-40 relative">
                  <span className="absolute left-5">
                    <RiTimerLine className="mr-5" />
                  </span>
                  <span>{data.yesDelay?.value}</span>
                  <span>{data.yesDelay?.timeUnit}</span>
                </button>
              </div>
            </div>
            <div
              aria-label="Sequence-branch state"
              className="relative h-6 w-48 text-gray-400 mx-auto justify-center action-state mb-[var(--vertical-offset)] flex items-center gap-3"
            >
              <span>
                <MdNotInterested />
              </span>
              <span className="action-state__text">accepted</span>
            </div>
            {Object.keys(data.yes || {}).length ? (
              <Nested data={data.yes} />
            ) : (
              <div>
                <button>new sequence</button>
              </div>
            )}
          </div>
          {/* main brach */}
          <div
            role="tree-item"
            className={cn(data.noDelay ? "action-face--fork" : "absolute left-[calc(50%-var(--block-w)/2)]")}
          >
            <div className="bg-purple-600 border border-purple-600 rounded-tr-md rounded-b-sm w-[var(--block-w)] h-10 text-center cursor-default relative z-20">
              <button
                data-test="msg-action-btn"
                aria-label="Click to open sequence-action config popup"
                aria-haspopup="true"
                className="flex items-center h-full absolute left-0 top-0 w-[calc(100%-20px)] z-10 pl-5 text-white"
              >
                action
              </button>
            </div>
          </div>
          {/* main right */}
          {data.noDelay && (
            <div
              role="tree-item"
              className="relative flex flex-col items-center"
            >
              <div
                aria-label="Sequence-branch state"
                className="relative h-6 w-48 text-gray-400 mx-auto justify-center action-state mb-[var(--vertical-offset)] flex items-center gap-3"
              >
                <span>
                  <MdNotInterested />
                </span>
                <span className="action-state__text">Not accepted</span>
              </div>
              <div className="relative">
                <div className="w-40 action-delay relative mb-[var(--vertical-offset)] flex flex-col items-center">
                  <button className="text-center px-5 flex items-center justify-center gap-2 bg-gray-300 p-3 rounded w-40 relative">
                    <span className="absolute left-5">
                      <RiTimerLine className="mr-5" />
                    </span>
                    <span>{data.noDelay?.value}</span>
                    <span>{data.noDelay?.timeUnit}</span>
                  </button>
                </div>
              </div>
              {Object.keys(data.no || {}).length ? (
                <Nested data={data.no} />
              ) : (
                <div>
                  <button>new sequence</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </span>
  );
}

export default Nested;
