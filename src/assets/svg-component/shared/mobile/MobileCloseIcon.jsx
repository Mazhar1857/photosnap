import React from "react";

const MobileCloseIcon = ({
  width = 16,
  height = 15,
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 15"
      className={className}
      style={style}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
      />
    </svg>
  );
};

export default MobileCloseIcon;
