import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const CheckboxComponent: React.FC<Props> = (props) => {

  const {label} = props;

  return (
    <div className="container-my-lib-ui-checkbox">
      <input type="checkbox" {...props} />
      <legend>{label}</legend>
    </div>);
};

export default CheckboxComponent;
