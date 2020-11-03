import * as React from "react";

export interface HamburgerMenuProps {
  isOpen: boolean;
  menuClicked: () => void;
  width?: number;
  height?: number;
  strokeWidth?: number;
  rotate?: number;
  color?: string;
  borderRadius?: number;
  animationDuration?: number;
  className?: string;
}

declare const HamburgerMenu: React.Component<HamburgerMenuProps>;
export default HamburgerMenu;
