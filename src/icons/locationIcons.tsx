import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const LocationIconInactive = ({
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
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M21.702 15.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.187 8.804 1.115 7.198c.581-1.004 3.26-.642 6.856.734"
      />
      <Path
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M13.5 22.666A8.333 8.333 0 1 0 13.5 6a8.333 8.333 0 0 0 0 16.666Z"
      />
    </Svg>
  );
};

export const LocationIconActive = ({
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
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m19.5 14.5 2.202 1.316c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.187 8.804 1.115 7.198c.581-1.004 3.26-.642 6.856.734C8.814 8.288 10.6 9.1 11 9.5"
      />
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M18.004 21.346a8.377 8.377 0 0 0 1.647-1.391c-2.214-.848-4.743-2.06-7.333-3.553-2.596-1.496-4.92-3.08-6.767-4.576a8.31 8.31 0 0 0-.376 2.137c1.684 1.328 3.781 2.746 6.142 4.106 2.38 1.371 4.678 2.483 6.687 3.277Zm-2.554 1.091a57.546 57.546 0 0 1-5.132-2.635 57.618 57.618 0 0 1-4.805-3.084 8.337 8.337 0 0 0 9.937 5.72Zm-2.134-7.768c2.72 1.568 5.336 2.795 7.532 3.598a8.333 8.333 0 0 0-14.434-8.32c1.794 1.497 4.172 3.149 6.902 4.722Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
