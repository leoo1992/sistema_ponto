export default function FormTittle(state:any) {
  return (
    <h1 className="text-center font-bold text-primary sm:text-lg">
      {state ? "Edição de Usuário" : "Cadastro de usuários"}
    </h1>
  );
}
