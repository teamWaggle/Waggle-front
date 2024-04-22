import { spinnerStyle } from "@/components/Spinner/Spinner.style";

export interface SpinnerProps {
  size?: number;
  width?: number;
}

const Spinner = ({ size = 80, width = 8 }: SpinnerProps) => {
  return <div css={spinnerStyle({ size, width })} />;
};

export default Spinner;
