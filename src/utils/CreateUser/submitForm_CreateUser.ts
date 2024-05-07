import { MutableRefObject } from "react";
import newUserPOST from "../../services/RegisterUser/newUserPOST";
import UserEdit from "../../services/UserList/UserEdit";

export const submitForm_CreateUser = (
  e: any,
  NameNewUserRef: MutableRefObject<HTMLInputElement | null>,
  EmailNewUserRef: MutableRefObject<HTMLInputElement | null>,
  PasswordNewUserRef: MutableRefObject<HTMLInputElement | null>,
  TelNewUserRef: MutableRefObject<HTMLInputElement | null>,
  typeNewUserRef: MutableRefObject<HTMLSelectElement> | any,
  cpfNewUserRef: MutableRefObject<HTMLInputElement | null>,
  sectorNewUserRef: MutableRefObject<HTMLSelectElement | null>,
  PositionNewUserRef: MutableRefObject<HTMLSelectElement | null>,
  userData: any,
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
  const position = PositionNewUserRef.current?.value;



if (!userData) {
  newUserPOST({
    name,
    email,
    password,
    telefone,
    userRole,
    cpf,
    sector,
    position,
  });
} else {
  UserEdit({
    name,
    email,
    password,
    telefone,
    userRole,
    cpf,
    sector,
    position,
  });
}


  handleSubmit({
    name,
    email,
    password,
    telefone,
    userRole,
    cpf,
    sector,
    position,
  });
  e.target.reset();
  NameNewUserRef.current?.focus();
};
