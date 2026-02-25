import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

export function FormInput(props: FormInputProps) {
  const { label, name, placeholder, type } = props;
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
}

export function FormButtonSend(props: { text: string, onClick?: () => void }) {
  const { text, onClick } = props;
  return <button type="submit" onClick={onClick}>{text}</button>;
}
