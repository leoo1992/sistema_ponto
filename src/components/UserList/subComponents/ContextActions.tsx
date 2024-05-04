export default function ContextActionsComponent ({
  handleDelete,
  handleDisable,
  handleEdit,
}: any) {
  return (
    <div className="flex gap-2 p-3 bg-base-300 sm:justify-center items-center">
      <button
        onClick={handleEdit}
        className="btn btn-primary rounded-3xl btn-xs text-white bg-primary glass"
      >
        Editar
      </button>
      <button
        onClick={handleDisable}
        className="btn btn-warning rounded-3xl btn-xs bg-warning glass"
      >
        Desativar
      </button>
      <button
        onClick={handleDelete}
        className="btn btn-error rounded-3xl btn-xs text-white bg-red-500 glass"
      >
        Deletar
      </button>
    </div>
  );
};
