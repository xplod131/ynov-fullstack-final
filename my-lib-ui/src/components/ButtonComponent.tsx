import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const ButtonComponent: React.FC<Props> = (props) => {

  const {label} = props;

  return <button className="buttonTemplate" {...props}>{label}</button>;
};

export default ButtonComponent;
