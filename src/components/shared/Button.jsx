import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "gray_900",
  ...restProps
}) => {
  const shapes = {
    square: "rounded-[0px]",
    circle: "rounded-[50%]",
    round: "rounded-[10px]",
  };

  const variants = {
    fill: {
      white_A700: "bg-[#ffffff] shadow-[0_3px_30px_0_#91aebb33]",
      gray_900: "bg-[#191919] text-[#ffffff]",
    },
    outline: {
      gray_600_02: "border-[#6e6e6e] border border-solid text-[#191919]",
      gray_700: "border-[#626262] border border-solid text-[#191919]",
      blue_gray_100_01: "border-[#d6d6d6] border border-solid text-[#191919]",
      blue_gray_100_02: "border-[#cfcfcf] border border-solid text-[#191919]",
    },
  };

  const sizes = {
    xs: "h-[24px] px-0.5",
    "2xl": "h-[60px] px-3.5",
    xl: "h-[56px] px-[34px] text-[16px]",
    "3xl": "h-[60px] px-[34px] text-[18px]",
    sm: "h-[38px] px-3.5 text-[14px]",
    md: "h-[42px] px-6 text-[16px]",
    lg: "h-[48px] px-6 text-[16px]",
  };

  return (
    <button
      className={`${className} ${shape && shapes[shape]} ${
        size && sizes[size]
      } ${
        variant && variants[variant]?.[color]
      } flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "2xl", "xl", "3xl", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_900",
    "gray_600_02",
    "gray_700",
    "blue_gray_100_01",
    "blue_gray_100_02",
  ]),
};

export { Button };
