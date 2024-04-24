import { useEffect, useState } from 'react';
import { UserTable } from './subComponents/UserTable';

const customText = {
  rowsPerPage: 'Linhas por página:',
  previous: 'Anterior',
  next: 'Próxima',
  loading: 'Carregando',
  noMatch: 'Nenhum registro encontrado',
  page: 'Página',
  of: 'de',
  selected: '{0} selecionado',
  noSelectedRowsSelected: '',
  selectedRows: {
    one: '{0} selecionado',
    other: '{0} selecionados',
  },
  noRowsSelected: '',
};

export default function UserList() {
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const textHeader = document.querySelector(
      '.rdt_TableHeader > div > div:first-child'
    );

    // @ts-ignore
    const parentDiv = document.querySelector('.rdt_Pagination')?.closest('div');

    if (textHeader && parentDiv) {
      // @ts-ignore
      const selectedId = selectedRows?.map((r) => r.id);
      textHeader.textContent = 'Id: ' + selectedId + ' -  Selecionado';
      parentDiv?.classList.add('w-full');
    }
  });

  const handleRowSelected = (state: any) => {
    setSelectedRows(state.selectedRows);
  };

  return (
    <div
      className="mt-4 flex flex-col justify-center items-center self-center content-center
     h-full w-11/12 m-0 sm:max-w-5xl"
    >
      <UserTable
        //progressPending={true}
        //={loading}
        // progressComponent={<CustomLoader />}
        pagination
        actions
        defaultSortField="name"
        striped
        dense
        paginationRowsPerPageOptions={[5, 10, 15]}
        onSelectedRowsChange={handleRowSelected}
        paginationComponentOptions={{
          rowsPerPageText: 'Linhas por página:',
          rangeSeparatorText: 'de',
          noRowsPerPage: false,
        }}
        highlightOnHover
        pointerOnHover
        text={customText}
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        responsive
        selectableRows
        selectableRowsNoSelectAll
        selectableRowsVisibleOnly
        selectableRowsHighlight
        selectableRowsSingle
        selectableRowsRadio
      />
    </div>
  );
}
