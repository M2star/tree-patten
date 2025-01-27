import React from "react";

import  {
    ActionButton,
    TimerButton,
    Tree,
    TreeItemWrapper,
    TwoBranchTree,
    ActionState
  } from "./tree";
function Nested(data) {
  return (
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
  );
}

export default Nested;
