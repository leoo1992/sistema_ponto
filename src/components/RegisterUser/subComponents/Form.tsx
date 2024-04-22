import { ReactNode } from 'react';
import useNewUser from '../../../hooks/useNewUser';

export default function Form({ children }: { children: ReactNode }) {
  const { onSubmit, handleSubmit } = useNewUser();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-body p-5 sm:p-8 w-full"
    >
      {children}
    </form>
  );
}
