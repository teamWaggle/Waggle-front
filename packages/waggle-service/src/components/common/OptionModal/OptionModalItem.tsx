import { optiopnModalItemStyle } from "@/components/common/OptionModal/OptionModal.style";
import type { OptionModalItemType } from "@/types/common";

const OptionModalItem = ({ children, icon, ...props }: OptionModalItemType) => {
  return (
    <button css={optiopnModalItemStyle} {...props}>
      {icon}
      {children}
    </button>
  );
};
export default OptionModalItem;
