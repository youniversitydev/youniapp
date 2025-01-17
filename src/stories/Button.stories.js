import { Button as ButtonComponent, Img } from "components";
export default {
  title: "ekandshunya/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "lg",
  children: "Button",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "lg",
  children: "Button",
  leftIcon: (
    <Img
      src="images/img_search.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "lg",
  children: "Button",
  rightIcon: (
    <Img
      src="images/img_search.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
