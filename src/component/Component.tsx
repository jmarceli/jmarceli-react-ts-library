import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Component: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};
