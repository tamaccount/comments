import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar } from './Avatar';
import { Cursor } from './Cursor';
import { Text } from './Text';
import { CommentActions } from './CommentActions';
import { cn } from '@/app/utils/cn';

interface User {
  name: string;
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface CursorConfig {
  position?: 'left' | 'right';
  color?: string;
  tooltipPosition?: 'left' | 'right';
  username?: string;
}

interface CommentProps {
  user?: User;
  message: string;
  cursor?: CursorConfig;
  align?: 'left' | 'right';
}

export function Comment({ user, message, cursor, align }: CommentProps) {
  return (
    <div className={cn('relative flex items-start gap-2', align === 'right' && 'flex-row-reverse')}>
      <div className="relative">
        {cursor && (
          <Cursor
            position={cursor.position}
            color={cursor.color}
            tooltipPosition={cursor.tooltipPosition}
            tooltip={cursor.username}
          />
        )}
        <div className="flex max-w-[218px] flex-col gap-2 rounded-lg border border-gray-alpha-400 bg-background-100 p-3 shadow-surface-sm">
          {user && (
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar
                  src={user.avatar.src}
                  alt={user.avatar.alt}
                  width={user.avatar.width}
                  height={user.avatar.height}
                />
                <Text weight="medium">{user.name}</Text>
              </div>
              <CommentActions />
            </div>
          )}
          <Text>
            <ReactMarkdown
              components={{
                code: ({ children, ...props }) => {
                  return (
                    <code
                      className="rounded-tn bg-gray-200 px-1 py-[1.5px] text-[13px] leading-[18px] text-gray-900"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                strong: ({ children, ...props }) => {
                  return (
                    <span className="font-semibold" {...props}>
                      {children}
                    </span>
                  );
                },
              }}
            >
              {message}
            </ReactMarkdown>
          </Text>
        </div>
      </div>
    </div>
  );
}
