import { MutableRefObject } from 'react';
import newUserPOST from '../services/RegisterUser/newUserPOST';

export const submitForm_CreateUser = (
  e: any,
  NameNewUserRef: React.MutableRefObject<HTMLInputElement | null>,
  EmailNewUserRef: MutableRefObject<HTMLInputElement | null>,
  PasswordNewUserRef: MutableRefObject<HTMLInputElement | null>,
  TelNewUserRef: MutableRefObject<HTMLInputElement | null>,
  typeNewUserRef: MutableRefObject<HTMLSelectElement> | any,
  handleSubmit: (data: any) => void
) => {
  e.preventDefault();
  const name = NameNewUserRef.current?.value;
  const email = EmailNewUserRef.current?.value;
  const password = PasswordNewUserRef.current?.value;
  const telefone = TelNewUserRef.current?.value;
  const userRole = typeNewUserRef.current?.value;

  newUserPOST({ name, email, password, telefone, userRole });
  handleSubmit({ name, email, password, telefone, userRole });
  e.target.reset();
  NameNewUserRef.current?.focus();
};
