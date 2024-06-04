interface ConfirmModalProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedID: React.Dispatch<React.SetStateAction<[] | null>>;
  text?: string;
  title?: string;
  buttonConfirmText?: string;
  buttonCancelText?: string;
  idModal: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  setIsOpen,
  setConfirm,
  text = "excluir",
  title = "Atenção",
  buttonConfirmText = "Confirmar",
  buttonCancelText = "Cancelar",
  idModal,
  setSelectedID,
}) => {
  return open ? (
    <>
      <input
        checked={open}
        type="checkbox"
        id={`modal-${idModal}`}
        className="modal-toggle"
        onChange={() => setIsOpen(open)}
      />
      <div
        id={`modal-${idModal}`}
        className="modal modal-middle bg-primary bg-opacity-15"
        role="dialog"
      >
        <div className="modal-box flex w-80 flex-col bg-base-100 pt-0 shadow-2xl shadow-primary-content">
          <form method="dialog">
            <button
              onClick={() => {setIsOpen(false);setSelectedID(null)}}
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="flex flex-1 items-center justify-center pt-4 text-center align-middle text-xl font-semibold">
              {title}
            </div>
          </form>
          <span className="mt-6 text-center font-semibold">{`Tem certeza que deseja ${text} este item ?`}</span>
          <div className="modal-action mt-6 flex w-full justify-center">
            <label htmlFor={`modal-${idModal}`} className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedID(null);
                  setIsOpen(false);
                }}
                className="btn glass btn-error btn-sm w-28 bg-error text-white"
              >
                {buttonCancelText}
              </button>
              <button
                onClick={() => {
                  setConfirm(true);
                  setIsOpen(false);
                }}
                className="btn glass btn-success btn-sm w-28 bg-success text-white"
              >
                {buttonConfirmText}
              </button>
            </label>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
