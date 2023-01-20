import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const RadioButtonComponent: React.FC<Props> = (props) => {

  const {label, name, value} = props;

  return (
    <div className="my-lib-ui-radio-container">
      <div>
        <input type="radio" id={label} {...props} />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>);
};

export default RadioButtonComponent;
