import React from "react";

interface Props {
  icon: JSX.Element;
  size?: number;
  style?: React.CSSProperties;
}

const IconWrap: React.FC<Props> = ({ icon, size, style }) => {
  return React.cloneElement(icon, {
    style: {
      fontSize: size,
      cursor: "pointer",
      ...style,
    },
  });
};

export default IconWrap;
