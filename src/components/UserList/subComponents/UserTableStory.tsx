import UserListGET from '../../../services/UserList/UserListGET';
import { getUserDataTableColumns } from '../../../utils/UserList/getUserDataTableColumns.util';
import { subHeaderComponent } from './subHeaderComponent';
import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';

const data2 = [
  {
    id: 999999,
    name: 'Leonardo',
    email: 'teste@test.com',
    telefone: '897489496',
    userRole: 'Administrador',
    ativo: 'Sim',
  },
  {
    id: 2,
    name: 'Samuel',
    email: 'teste@test.com',
    telefone: '897489496',
    userRole: 'Administrador',
    ativo: 'Sim',
  },
];

export const UserTableStory = ({
  selectableRows,
  selectableRowsNoSelectAll,
  selectableRowsVisibleOnly,
  selectableRowsHighlight,
  selectableRowsSingle,
  expandableRows,
  expandOnRowClicked,
  expandOnRowDoubleClicked,
  expandableRowsHideExpander,
  pagination,
  highlightOnHover,
  striped,
  pointerOnHover,
  dense,
  persistTableHead,
  noHeader,
  fixedHeader,
  fixedHeaderScrollHeight,
  progressPending,
  selectableRowsRadio,
  noTableHead,
  noContextMenu,
  direction,
  subHeader,
  subHeaderAlign,
  subHeaderWrap,
  responsive,
  disabled,
  onSelectedRowsChange,
  paginationComponentOptions,
  paginationRowsPerPageOptions,
  paginationComponent,
}: any) => {
  const [data, setData] = useState([]);
  console.log(data);

  const selectableRowsComponentProps = useMemo(
    () => ({
      type: 'radio',
    }),
    [selectableRowsRadio]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await UserListGET();
        setData(newData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataTable
      title={
        <span className=" h-full w-full p-0 m-0 font-semibold">Usuários</span>
      }
      columns={getUserDataTableColumns}
      data={data2}
      defaultSortFieldId={1}
      selectableRows={selectableRows}
      selectableRowsComponentProps={selectableRowsComponentProps}
      selectableRowsNoSelectAll={selectableRowsNoSelectAll}
      selectableRowsHighlight={selectableRowsHighlight}
      selectableRowsSingle={selectableRowsSingle}
      selectableRowsVisibleOnly={selectableRowsVisibleOnly}
      expandableRows={expandableRows}
      expandOnRowClicked={expandOnRowClicked}
      expandOnRowDoubleClicked={expandOnRowDoubleClicked}
      expandableRowsHideExpander={expandableRowsHideExpander}
      pagination={pagination}
      highlightOnHover={highlightOnHover}
      striped={striped}
      pointerOnHover={pointerOnHover}
      dense={dense}
      noTableHead={noTableHead}
      persistTableHead={persistTableHead}
      progressPending={progressPending}
      noHeader={noHeader}
      subHeader={subHeader}
      subHeaderComponent={subHeaderComponent}
      subHeaderAlign={subHeaderAlign}
      subHeaderWrap={subHeaderWrap}
      noContextMenu={noContextMenu}
      fixedHeader={fixedHeader}
      fixedHeaderScrollHeight={fixedHeaderScrollHeight}
      direction={direction}
      responsive={responsive}
      disabled={disabled}
      paginationComponentOptions={paginationComponentOptions}
      paginationComponent={paginationComponent}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
};