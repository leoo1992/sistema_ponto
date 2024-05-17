interface TablePositionProps {
  positionsList: string[];
}
export const TablePosition: React.FC<TablePositionProps> = ({ positionsList }) => {
  return (
    <>
      {positionsList.length > 0 && (
        <div className="mt-8 h-full w-full overflow-x-auto overflow-y-auto rounded-xl bg-white shadow shadow-primary">
          <table className="table w-full">
            <tbody>
              {positionsList.map((position: any, index: any) => (
                <tr key={index} className="flex">
                  <td className="flex h-full flex-1 flex-col content-center justify-center self-center">
                    <span className="">{position}</span>
                  </td>
                  <td className="py-2 pl-0 text-end text-error">
                    <button className="btn glass btn-error btn-sm bg-error text-white">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
