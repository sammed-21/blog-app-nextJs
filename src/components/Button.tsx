import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  url: string;
  classname: string;
}

const Button: React.FC<ButtonProps> = ({ text, url, classname }) => {
  if (!url) {
    return <button className="button">{text}</button>;
  }

  return (
    <Link href={url}>
      <button className={`button ${classname} hover:bg-sky-500`}>{text}</button>
    </Link>
  );
};

export default Button;
