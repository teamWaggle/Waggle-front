import { useFormContext } from "react-hook-form";
import { Box } from "waggle-design-system";

interface ResetButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

const ResetButton = ({ children, onClick, ...props }: ResetButtonProps) => {
  const { reset } = useFormContext();
  const handleOnclick = () => {
    reset();
    if (onClick) onClick();
  };

  return (
    <Box onClick={handleOnclick} {...props}>
      {children}
    </Box>
  );
};

export default ResetButton;
