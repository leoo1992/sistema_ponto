import { ReactNode } from "react";

export default function Form({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: any;
}) {
  return (
    <form onSubmit={onSubmit} className="card-body w-full p-8">
      {children}
    </form>
  );
}
