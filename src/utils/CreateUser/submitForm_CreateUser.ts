import { MutableRefObject } from "react";
import newUserPOST from "../../services/RegisterUser/newUserPOST";

export const submitForm_CreateUser = (
  e: any,
  NameNewUserRef: React.MutableRefObject<HTMLInputElement | null>,
  EmailNewUserRef: MutableRefObject<HTMLInputElement | null>,
  PasswordNewUserRef: MutableRefObject<HTMLInputElement | null>,
  TelNewUserRef: MutableRefObject<HTMLInputElement | null>,
  typeNewUserRef: MutableRefObject<HTMLSelectElement> | any,
  cpfNewUserRef: MutableRefObject<HTMLInputElement | null>,
  sectorNewUserRef: React.MutableRefObject<HTMLInputElement | null>,
  jobFunctionNewUserRef: React.MutableRefObject<HTMLInputElement | null>,

  handleSubmit: (data: any) => void,
) => {
  e.preventDefault();
  const name = NameNewUserRef.current?.value;
  const email = EmailNewUserRef.current?.value;
  const password = PasswordNewUserRef.current?.value;
  const telefone = TelNewUserRef.current?.value;
  const userRole = typeNewUserRef.current?.value;
  const cpf = cpfNewUserRef.current?.value;
  const sector = sectorNewUserRef.current?.value;
  const jobFunction = jobFunctionNewUserRef.current?.value;

  newUserPOST({
    name,
    email,
    password,
    telefone,
    userRole,
    cpf,
    sector,
    jobFunction,
  });
  handleSubmit({
    name,
    email,
    password,
    telefone,
    userRole,
    cpf,
    sector,
    jobFunction,
  });
  e.target.reset();
  NameNewUserRef.current?.focus();
};
