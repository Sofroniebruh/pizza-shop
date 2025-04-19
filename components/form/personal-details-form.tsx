import { WhiteBlock } from "@/components/shared-components/white-box";
import { Input } from "@/components/ui";
import { FormInput } from "@/components/form/form-input";

export const PersonalDetails = () => {
  return (
    <WhiteBlock title={"2. Personal details"}>
      <div className={"grid gap-5 grid-cols-2"}>
        <Input name={"firstName"} className={"text-base rounded-sm"} placeholder={"First name"}></Input>
        <Input name={"lastName"} className={"text-base rounded-sm"} placeholder={"Last name"}></Input>
        <Input name={"email"} className={"text-base rounded-sm"} placeholder={"Email address"}></Input>
        <FormInput name={"phone"} className={"text-base rounded-sm"} placeholder={"Phone number"}></FormInput>
      </div>
    </WhiteBlock>
  );
};