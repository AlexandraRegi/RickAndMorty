import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CharacterIconInactive = ({
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
        fill={props.color}
        d="M10.923 14.966a2.222 2.222 0 1 0 0-4.444 2.222 2.222 0 0 0 0 4.444ZM17.59 14.966a2.222 2.222 0 1 0 0-4.444 2.222 2.222 0 0 0 0 4.444Z"
      />
      <Path
        stroke={props.color}
        strokeWidth={2}
        d="M14.09 4C9.079 4 5 8.038 5 13l.052 8a3.518 3.518 0 0 0 3.483 3c1.186 0 2.095-.417 2.7-1.174a4.065 4.065 0 0 0 5.725-.014c.607.762 1.519 1.188 2.686 1.188 1.95 0 3.536-1.57 3.536-3.5V13c0-4.962-4.078-9-9.091-9Z"
      />
    </Svg>
  );
};

export const CharacterIconActive = ({
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
        fill={props.color}
        fillRule="evenodd"
        d="M14.09 4C9.079 4 5 8.038 5 13l.052 8a3.518 3.518 0 0 0 3.483 3c1.186 0 2.095-.417 2.7-1.174a4.065 4.065 0 0 0 5.725-.014c.607.762 1.519 1.188 2.686 1.188 1.95 0 3.536-1.57 3.536-3.5V13c0-4.962-4.078-9-9.091-9Zm-3.167 10.966a2.222 2.222 0 1 0 0-4.444 2.222 2.222 0 0 0 0 4.444Zm8.89-2.222a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
