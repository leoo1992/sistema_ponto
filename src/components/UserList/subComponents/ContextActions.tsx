export default function ContextActionsComponent({
  handleDelete,
  handleDisable,
  handleEdit,
}: any) {
  return (
    <div className="flex items-center gap-2 bg-base-300 p-3 sm:justify-center">
      <button
        onClick={handleEdit}
        className="btn glass btn-primary btn-xs rounded-3xl bg-primary text-white"
      >
        Editar
      </button>
      <button
        onClick={handleDisable}
        className="btn glass btn-warning btn-xs rounded-3xl bg-warning"
      >
        Desativar
      </button>
      <button
        onClick={handleDelete}
        className="btn glass btn-error btn-xs rounded-3xl bg-red-500 text-white"
      >
        Deletar
      </button>
    </div>
  );
}
