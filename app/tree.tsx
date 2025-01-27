import React from "react";
import { RiTimerLine } from "react-icons/ri";

interface ActionButtonProps {
  children: React.ReactNode;
}

const ActionButton = React.forwardRef<HTMLDivElement, ActionButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        role="tree-item"
        className="absolute left-[calc(50%-var(--block-w)/2)]"
        ref={ref}
      >
        <div className="bg-purple-600 border border-purple-600 rounded-tr-md rounded-b-sm w-[var(--block-w)] h-10 text-center cursor-default relative z-20">
          <button
            data-test="msg-action-btn"
            aria-label="Click to open sequence-action config popup"
            aria-haspopup="true"
            className="flex items-center h-full absolute left-0 top-0 w-[calc(100%-20px)] z-10 pl-5 text-white"
            {...rest}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }
);

ActionButton.displayName = "ActionButton";

interface TimerButtonProps {
  label: string;
  children?: React.ReactNode;
}

const TimerButton = React.forwardRef<HTMLDivElement, TimerButtonProps>(
  ({ label, children, ...rest }, ref) => {
    return (
      <div className="relative" ref={ref}>
        <div className="w-40 action-delay relative mb-[var(--vertical-offset)] flex flex-col items-center">
          <button
            className="text-center px-5 flex items-center justify-center gap-2 bg-gray-300 p-3 rounded w-40 relative"
            {...rest}
          >
            <span className="absolute left-5">
              <RiTimerLine className="mr-5" />
            </span>
            <span>{label}</span>
            {children}
          </button>
        </div>
      </div>
    );
  }
);

TimerButton.displayName = "TimerButton";

interface ActionStateProps {
  children: React.ReactNode;
}

const ActionState = React.forwardRef<HTMLDivElement, ActionStateProps>(
  ({ children }, ref) => {
    return (
      <div
        aria-label="Sequence-branch state"
        className="relative h-6 w-48 text-gray-400 mx-auto justify-center action-state mb-[var(--vertical-offset)] flex items-center gap-3"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

ActionState.displayName = "ActionState";

interface TreeItemWrapperProps {
  children: React.ReactNode;
}

const TreeItemWrapper = React.forwardRef<HTMLDivElement, TreeItemWrapperProps>(
  ({ children }, ref) => {
    return (
      <div
        role="tree-item"
        className="relative flex flex-col items-center"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

TreeItemWrapper.displayName = "TreeItemWrapper";

interface TwoBranchTreeProps {
  children: React.ReactNode;
}

interface TwoBranchTreeProps {
  children: React.ReactNode;
}

const TwoBranchTree = React.forwardRef<HTMLDivElement, TwoBranchTreeProps>(
  ({ children }, ref) => {
    return (
      <div
        role="group"
        className="grid relative action__container--grid grid-cols-[auto_auto] items-auto gap-0"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

TwoBranchTree.displayName = "TwoBranchTree";

interface TreeProps {
  children: React.ReactNode;
}

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  ({ children }, ref) => {
    return (
      <span ref={ref} role="tree" aria-label="source tree" className="action">
        <div role="treeitem">{children}</div>
      </span>
    );
  }
);

Tree.displayName = "Tree";

export {
  ActionButton,
  TimerButton,
  TreeItemWrapper,
  TwoBranchTree,
  Tree,
  ActionState,
};
