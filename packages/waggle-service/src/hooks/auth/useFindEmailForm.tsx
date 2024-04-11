import { useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";

import ResultEmailModal from "@/components/Login/ResultEmailModal/ResultEmailModal";

import { useFindEmailMutation } from "@/hooks/api/auth/useFindEmailMutation";
import useModal from "@/hooks/useModal";
import { useValidateForm } from "@/hooks/useValidateForm";

import { dateFormatToUTC } from "@/utils/dateFormatToUTC";

import type { FindEmailResponseType } from "@/types/auth";

interface FindEmailForm {
  value: string;
}

export interface BirthdayForm {
  year: string | boolean;
  month: string | boolean;
  day: string | boolean;
}

interface UseFindEmailFormParas {
  prevName?: { value: string };
  prevBirthday?: { year: string; month: string; day: string };
}

export const useFindEmailForm = ({ prevName, prevBirthday }: UseFindEmailFormParas) => {
  const { mutate: findEmailMutation } = useFindEmailMutation();

  const modal = useModal();

  const nameRef = useRef<HTMLInputElement>(null);

  const [birthdayRequest, setBirthdayRequest] = useState(
    prevBirthday ?? {
      year: "생년",
      month: "월 선택",
      day: "일 선택",
    }
  );

  const [selectOpen, setSelectOpen] = useState({
    year: false,
    month: false,
    day: false,
  });

  const [name, setName] = useState(prevName ?? { value: "" });
  const [birthday, setBirthday] = useState(
    dateFormatToUTC(birthdayRequest.year, birthdayRequest.month, birthdayRequest.day)
  );

  const validateForm = () => {
    if (useValidateForm(name.value, nameRef, "이름을 입력해주세요") === false) {
      return false;
    }

    if (
      birthdayRequest.year === "생년" ||
      birthdayRequest.month === "월 선택" ||
      birthdayRequest.day === "일 선택"
    ) {
      toast.error("생년월일을 입력해주세요");

      return false;
    }

    return true;
  };

  const updateNameValue = useCallback(
    <Key extends keyof FindEmailForm>(key: Key, value: FindEmailForm[Key]) => {
      setName((prevName) => {
        const data = {
          ...prevName,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSelectOpen = useCallback(
    <Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => {
      setSelectOpen((prevSelectOpen) => {
        const data = {
          ...prevSelectOpen,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const updateBirthdayValue = useCallback(
    <Key extends keyof BirthdayForm>(key: Key, value: BirthdayForm[Key]) => {
      setBirthdayRequest((prevBirthdayRequest) => {
        const data = {
          ...prevBirthdayRequest,
          [key]: value,
        };

        setBirthday(dateFormatToUTC(data.year, data.month, data.day));

        return data;
      });

      handleSelectOpen(key, false);
    },
    []
  );

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    findEmailMutation(
      { name: name.value, birthday },
      {
        onSuccess: ({ result }: FindEmailResponseType) => {
          modal.closeModal();
          modal.openModal({
            key: "ResultEmailModal",
            component: () => <ResultEmailModal emailList={result.emailList} />,
          });
        },
      }
    );
  };

  return {
    name,
    nameRef,
    updateNameValue,
    handleSubmit,
    selectOpen,
    handleSelectOpen,
    birthdayRequest,
    updateBirthdayValue,
    birthday,
  };
};
