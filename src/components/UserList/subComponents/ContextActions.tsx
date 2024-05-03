export const ContextActions = ({
  handleDelete,
  handleDesativar,
  handleEditar,
}: any) => {
  return (
    <div className="w-full">
      <button
        onClick={handleEditar}
        className="btn btn-primary glass rounded-3xl"
      >
        Editar
      </button>
      <button
        onClick={handleDelete}
        className="btn btn-error glass rounded-3xl"
      >
        Deletar
      </button>
      <button
        onClick={handleDesativar}
        className="btn btn-warn glass rounded-3xl"
      >
        Desativar
      </button>
    </div>
  );
};
