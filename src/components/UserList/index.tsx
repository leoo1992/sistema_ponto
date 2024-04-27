import { useEffect, useState } from 'react';
import { UserTable } from './subComponents/UserTable';
import { customText } from '../../utils/UserList/customTextDataTable.util';
import resetCSSDataTable from '../../utils/UserList/resetCSSDataTable.util';

export default function UserList() {
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    resetCSSDataTable(selectedRows);
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
        progressComponent
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
