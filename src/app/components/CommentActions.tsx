'use client';

import { useState, useEffect, useRef, forwardRef, type ReactNode, useCallback } from 'react';
import { cn } from '@/app/utils/cn';

interface ActionButtonProps {
  onClick?: () => void;
  label: string;
  children: ReactNode;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ onClick = () => {}, label, children }, ref) => {
    return (
      <button
        className="flex size-6 cursor-pointer items-center justify-center rounded-tn transition-colors hover:bg-gray-100"
        onClick={onClick}
        aria-label={label}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

ActionButton.displayName = 'ActionButton';

export function CommentActions() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen && firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid w-8 auto-cols-fr grid-flow-col items-center gap-[3px] overflow-hidden rounded-sm border border-background-100 p-[3px] transition-all duration-200',
        isOpen && 'w-[113px] border-gray-alpha-400 shadow-surface-sm'
      )}
    >
      <div className="flex items-center gap-[3px]">
        {isOpen && (
          <>
            <ActionButton ref={firstButtonRef} label="Add reaction">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.875 4.88V4.255V3.13H11.75H11.125V1.88H11.75H12.875V0.755005V0.130005H14.125V0.755005V1.88H15.25H15.875V3.13H15.25H14.125V4.255V4.88H12.875ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.50249 13.9396 7.02012 13.8261 6.55939L15.2826 6.20061C15.4248 6.77782 15.5 7.38064 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C8.61936 0.5 9.22218 0.575236 9.79939 0.717424L9.44061 2.17388C8.97988 2.06039 8.49751 2 8 2ZM5.28814 9.37065L5.68309 9.85505C6.23216 10.5285 7.06631 10.9568 8.00098 10.9568C8.93565 10.9568 9.76979 10.5285 10.3189 9.85505L10.7138 9.37065L11.6826 10.1606L11.2877 10.645C10.5114 11.597 9.32714 12.2068 8.00098 12.2068C6.67481 12.2068 5.49057 11.597 4.71431 10.645L4.31935 10.1606L5.28814 9.37065ZM5.75 8C6.44036 8 7 7.44036 7 6.75C7 6.05964 6.44036 5.5 5.75 5.5C5.05964 5.5 4.5 6.05964 4.5 6.75C4.5 7.44036 5.05964 8 5.75 8ZM11.5 6.75C11.5 7.44036 10.9404 8 10.25 8C9.55964 8 9 7.44036 9 6.75C9 6.05964 9.55964 5.5 10.25 5.5C10.9404 5.5 11.5 6.05964 11.5 6.75Z"
                  className="fill-gray-900"
                />
              </svg>
            </ActionButton>
            <ActionButton label="Mark as done">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
                  className="fill-gray-900"
                />
              </svg>
            </ActionButton>
            <ActionButton label="Create ticket in Linear">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.43117 14.9299L8.43111 14.9299C8.41191 14.9311 8.39271 14.9239 8.37854 14.9097L1.0903 7.62146C1.07617 7.60733 1.06893 7.58812 1.07013 7.56882C1.09058 7.24042 1.13389 6.91823 1.19846 6.60382C1.20877 6.5536 1.27169 6.53283 1.31113 6.57228L1.36063 6.52279L1.31114 6.57229L9.42771 14.6889L9.47721 14.6394L9.42772 14.6889C9.46716 14.7283 9.4464 14.7912 9.39618 14.8015C9.08177 14.8661 8.75958 14.9094 8.43117 14.9299ZM11.5315 13.9745L11.5672 14.0347L11.5315 13.9745C11.3002 14.1119 11.0603 14.2363 10.8128 14.3465C10.7874 14.3578 10.7572 14.3523 10.7367 14.3319L1.6681 5.26326C1.6681 5.26326 1.6681 5.26326 1.6681 5.26326C1.64769 5.24284 1.64218 5.21258 1.65347 5.18723C1.76373 4.93969 1.88807 4.69978 2.02547 4.46854L1.96529 4.43278L2.02547 4.46854C2.04741 4.4316 2.0993 4.42444 2.13149 4.45663L2.18099 4.40714L2.13149 4.45663L11.5434 13.8685L11.5434 13.8685C11.5756 13.9007 11.5684 13.9526 11.5315 13.9745ZM12.6126 13.1818L12.6126 13.1818C12.5862 13.2053 12.5453 13.2044 12.5191 13.1783C12.5191 13.1783 12.5191 13.1783 12.5191 13.1783L2.82172 3.48086C2.79558 3.45473 2.79468 3.41378 2.81822 3.38742C4.08862 1.96517 5.93636 1.07 7.99327 1.07C11.8243 1.07 14.93 4.17568 14.93 8.00673C14.93 10.0636 14.0348 11.9114 12.6126 13.1818ZM1.23971 9.5972C1.23193 9.56406 1.2465 9.54068 1.2684 9.529C1.29077 9.51707 1.32056 9.51771 1.34555 9.54271L6.45729 14.6544C6.48229 14.6794 6.48293 14.7092 6.471 14.7316C6.45931 14.7535 6.43593 14.7681 6.40279 14.7603C3.84908 14.1612 1.83877 12.1509 1.23971 9.5972Z"
                  className="fill-gray-900"
                />
              </svg>
            </ActionButton>
          </>
        )}
        <ActionButton onClick={() => setIsOpen(!isOpen)} label="More actions">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="fil"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z"
              className="fill-gray-900"
            />
          </svg>
        </ActionButton>
      </div>
    </div>
  );
}
