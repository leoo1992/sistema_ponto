export default function RegisterPage() {
  return (
    <div className="flex-grow flex justify-center items-start m-0 pt-5">
      <div
        className="card shrink-0 max-w-sm shadow-sm bg-gradient-to-b
     from-slate-100 via-white to-white  shadow-primary"
      >
        <form className="card-body p-5 sm:p-8 sm:w-96">
          <div className="form-control">
            <h1 className="text-primary font-bold text-center text-lg">
              Cadastro
            </h1>
            <label className="label">
              <span className="label-text text-primary font-bold">Nome</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="input input-bordered shadow-primary shadow-sm text-primary input-md"
              maxLength={20}
              required
            />
            <label className="label">
              <span className="label-text text-primary font-bold">E-mail</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="input input-bordered shadow-primary shadow-sm text-primary input-md"
              maxLength={20}
              required
            />
            <label className="label">
              <span className="label-text text-primary font-bold">Senha</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className="input input-bordered shadow-primary shadow-sm text-primary input-md"
              maxLength={11}
              required
            />
            <label className="label">
              <span className="label-text text-primary font-bold">
                Telefone
              </span>
            </label>
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              className="input input-bordered shadow-primary shadow-sm text-primary input-md"
              maxLength={11}
              required
            />
            <label className="label">
              <span className="label-text text-primary font-bold">
                Tipo de usuário
              </span>
            </label>
            <select
              defaultValue={0}
              className="input input-bordered shadow-primary shadow-sm text-primary input-md"
              required
            >
              <option disabled value={0}>
                Selecione o tipo
              </option>
              <option value={1}>Administrador</option>
              <option value={2}>Usuário</option>
            </select>
            <button className="btn btn-primary mt-5">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
