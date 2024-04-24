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
    const divElement = document.querySelector(
      '.rdt_TableHeader > div > div:first-child'
    );
    const pagination = document.querySelector('.rdt_Pagination');
    const header = document.querySelector('.rdt_TableHeader');

    if (header) {
      header.classList.add('rounded-t-box');
    }

    if (pagination) {
      const parentDiv = pagination.closest('div');
      parentDiv?.classList.add('w-full');
      pagination.classList.add('rounded-b-box');
    }

    if (divElement) {
      // @ts-ignore
      const selectedId = selectedRows.map((r) => r.id);
      divElement.textContent = 'Id: ' + selectedId + ' -  Selecionado';
    }
  });

  const handleRowSelected = (state: any) => {
    setSelectedRows(state.selectedRows);
  };

  return (
    <div className=" flex flex-col justify-center items-center self-center content-center h-full w-full m-0 p-2 sm:p-5 sm:max-w-7xl">
      <UserTable
        // progressPending={loading}
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
