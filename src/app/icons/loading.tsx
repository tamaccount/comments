import type { SVGProps } from 'react';

const Loading = (props: SVGProps<SVGSVGElement>) => {
  const lines = [
    'M7.99805 0V4',
    'M12.7969 1.52734L10.3978 4.76341',
    'M15.7637 5.52734L11.8819 6.76341',
    'M15.7637 10.4727L11.8819 9.23659',
    'M12.7969 14.4727L10.3978 11.2366',
    'M7.99805 16V12',
    'M3.20117 14.4727L5.60023 11.2366',
    'M0.236328 10.4727L4.11808 9.23659',
    'M0.236328 5.52734L4.11808 6.76341',
    'M3.20117 1.52734L5.60023 4.76341',
  ];

  const totalDuration = 0.8; // Total duration of one full rotation
  const lineCount = lines.length;
  const segmentDuration = totalDuration / lineCount;

  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Loading</title>
      <g stroke="var(--ds-gray-900)" strokeWidth={1.5}>
        {lines.map((d, i) => (
          <path key={`loading-line-${Number(i)}`} d={d} opacity={0}>
            <animate
              attributeName="opacity"
              values="1;0"
              opacity="0"
              dur={`${totalDuration}s`}
              repeatCount="indefinite"
              begin={`${i * segmentDuration}s`}
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              keyTimes="0; 1"
            />
          </path>
        ))}
      </g>
    </svg>
  );
};
export default Loading;
