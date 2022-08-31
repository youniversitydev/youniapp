import { CheckBox } from "components";
export default {
  title: "ekandshunya/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  variant: "OutlineRed300",
  size: "sm",
  inputClassName: "mr-1",
};
