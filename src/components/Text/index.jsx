import React from "react";

const sizeClasses = {
  txtPoppinsRegular16Bluegray500: "font-normal font-poppins",
  txtPoppinsMedium18Red90001: "font-medium font-poppins",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtPoppinsSemiBold18Red90001: "font-poppins font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium14Bluegray500: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsSemiBold18Bluegray900: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
