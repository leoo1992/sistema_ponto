import { ReactNode } from 'react';

export default function Form({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: any;
}) {
  return (
    <form onSubmit={onSubmit} className="card-body p-8 w-full">
      {children}
    </form>
  );
}
