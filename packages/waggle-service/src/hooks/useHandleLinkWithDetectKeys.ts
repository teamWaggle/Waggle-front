import { useNavigate } from "react-router-dom";

export const useHandleLinkWithDetectKeys = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      window.open(href, "_blank");
    } else if (e.type === "click") {
      navigate(href);
    }
  };

  return handleClick;
};
