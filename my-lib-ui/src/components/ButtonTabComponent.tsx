import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const ButtonTabComponent: React.FC<Props> = (props) => {

  const {label} = props;

  return <button className="buttonTab" {...props}>{label}</button>;
};

export default ButtonTabComponent;
