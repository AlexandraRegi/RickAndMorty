import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const EpisodeIconInactive = ({
  width = 28,
  height = 28,
  ...props
}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}>
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.333 8.167H4.667A2.333 2.333 0 0 0 2.333 10.5v12.833a2.333 2.333 0 0 0 2.334 2.334h18.666a2.333 2.333 0 0 0 2.334-2.334V10.5a2.333 2.333 0 0 0-2.334-2.333Z"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.833 2.333 14 8.167 8.167 2.333"
      />
    </Svg>
  );
};

export const EpisodeIconActive = ({
  width = 28,
  height = 28,
  ...props
}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}>
      <Path
        fill="#5856D6"
        d="M23.333 8.167H4.667A2.333 2.333 0 0 0 2.333 10.5v12.833a2.333 2.333 0 0 0 2.334 2.334h18.666a2.333 2.333 0 0 0 2.334-2.334V10.5a2.333 2.333 0 0 0-2.334-2.333Z"
      />
      <Path
        stroke="#5856D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.833 2.333 14 8.167 8.167 2.333"
      />
    </Svg>
  );
};
