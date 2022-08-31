import { Input } from "components";
export default {
  title: "ekandshunya/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "CustomBorderTL10",
  variant: "FillWhiteA70033",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
