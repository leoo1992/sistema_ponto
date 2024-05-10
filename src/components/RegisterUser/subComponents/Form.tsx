import { ReactNode } from "react";

export default function Form({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: any;
}) {
  return (
    <form onSubmit={onSubmit} className="flex  flex-col w-full p-6 m-0">
      {children}
    </form>
  );
}
