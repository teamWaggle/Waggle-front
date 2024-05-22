import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import { Flex, Heading, getDefaultTextStyle, Theme } from "waggle-design-system";

import PublicRadioButton from "@/components/common/Button/PublicRadioButton/PublicRadioButton";

const PublicRadioInputField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { register } = useFormContext();

  return (
    <Flex styles={{ align: "center", gap: "30px" }}>
      <Flex styles={{ align: "center", gap: "12px" }}>
        <PublicRadioButton register={register(name)} value="public" checked />
        <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
          공개
        </Heading>
      </Flex>
      <Flex styles={{ align: "center", gap: "12px" }}>
        <PublicRadioButton register={register(name)} value="private" />
        <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
          비공개
        </Heading>
      </Flex>
    </Flex>
  );
};

export default PublicRadioInputField;
