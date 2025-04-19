import { WhiteBlock } from "@/components/shared-components/white-box";
import { FormInput } from "@/components/form/form-input";

export const PersonalDetails = () => {
  return (
    <WhiteBlock title={"2. Personal details"}>
      <div className={"grid gap-5 grid-cols-2"}>
        <FormInput name={"firstName"} className={"text-base rounded-sm"} placeholder={"First name"}></FormInput>
        <FormInput name={"lastName"} className={"text-base rounded-sm"} placeholder={"Last name"}></FormInput>
        <FormInput name={"email"} className={"text-base rounded-sm"} placeholder={"Email address"}></FormInput>
        <FormInput name={"phone"} className={"text-base rounded-sm"} placeholder={"Phone number"}></FormInput>
      </div>
    </WhiteBlock>
  );
};