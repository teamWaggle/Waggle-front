import PrimaryLogo from "@/assets/svg/logo.svg?react";

interface LogoType {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoType) => {
  return <PrimaryLogo width={width} height={height} />;
};

export default Logo;
