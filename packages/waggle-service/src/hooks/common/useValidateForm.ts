import { toast } from "react-toastify";

export const useValidateForm = (
  data: string | boolean,
  ref: React.RefObject<HTMLInputElement>,
  errorMessage: string
) => {
  if (!data) {
    ref.current?.focus();
    toast.error(errorMessage);

    return false;
  }
};
