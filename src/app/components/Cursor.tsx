import React from 'react';
import { cn } from '@/app/utils/cn';
import { Text } from './Text';

export interface CursorProps {
  position?: 'left' | 'right';
  color?: string;
  tooltipPosition?: 'left' | 'right';
  tooltip?: string;
}

const colorMap = {
  blue: {
    cursor: 'fill-blue-600',
    tooltip: 'bg-blue-600',
  },
  red: {
    cursor: 'fill-red-700',
    tooltip: 'bg-red-700',
  },
  teal: {
    cursor: 'fill-teal-600',
    tooltip: 'bg-teal-600',
  },
};

export function Cursor({
  position = 'right',
  color = 'blue',
  tooltipPosition = 'right',
  tooltip,
}: CursorProps) {
  const colorStyle = colorMap[color as keyof typeof colorMap] || colorMap.blue;

  return (
    <div
      className={cn('absolute top-1/2 animate-float', position === 'left' ? '-left-7' : '-right-7')}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(position === 'left' && '-scale-x-100')}
      >
        <defs>
          <filter id="cursorShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="2" floodOpacity="0.04" />
            <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodOpacity="0.02" />
            <feDropShadow dx="0" dy="2" stdDeviation="1" floodOpacity="0.16" />
          </filter>
        </defs>
        <path
          d="M4.72711 14.2198L1.76551 2.37345C1.66761 1.98173 2.05041 1.64148 2.42791 1.78469L14.242 6.26593C14.6793 6.43173 14.6698 7.05363 14.2276 7.20603L8.71411 9.10733C8.59781 9.14743 8.50041 9.22893 8.44041 9.33643L5.64881 14.342C5.42811 14.7378 4.83701 14.6594 4.72711 14.2198Z"
          className={colorStyle.cursor}
          filter="url(#cursorShadow)"
        />
        <path
          d="M1.0388 2.55537L4.0004 14.4017C4.2751 15.5007 5.753 15.6967 6.3048 14.7073L9.0498 9.78514L14.473 7.91514C15.5784 7.53394 15.6021 5.97934 14.5089 5.56464L2.6948 1.08345C1.751 0.725437 0.79397 1.57605 1.0388 2.55537Z"
          className="stroke-background-100"
          strokeWidth="1.5"
        />
      </svg>
      {tooltip && (
        <div
          className={cn(
            'border-md absolute top-[80%] whitespace-nowrap rounded-sm px-1 py-0.5',
            tooltipPosition === 'left' ? 'left-[80%]' : 'right-[80%]',
            colorStyle.tooltip
          )}
        >
          <Text size="sm" color="reverse" weight="medium">
            {tooltip}
          </Text>
        </div>
      )}
    </div>
  );
}
