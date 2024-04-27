import UserListGET from '../../../services/UserList/UserListGET';
import { getUserDataTableColumns } from '../../../utils/UserList/getUserDataTableColumns.util';
import { NoDataComponent } from './NoDataComponent';
import { ProgressComponent } from './ProgressComponent';
import { subHeaderComponent } from './subHeaderComponent';
import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
//import {data} from '../../../utils/UserList/data.util';

export const UserTableStory = ({
  paginationServer,
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
  paginationRowsPerPageOptions,
  paginationComponent,
}: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);
    setRowsPerPage(newPerPage);
    setCurrentPage(page);
    try {
      const newData = await UserListGET(newPerPage, page);
      setData(newData.data);
      setTotalRows(newData.total);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await UserListGET(rowsPerPage, currentPage);
        setData(newData.data);
        setTotalRows(newData.total);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [rowsPerPage, currentPage]);

  const selectableRowsComponentProps = useMemo(
    () => ({
      type: 'radio',
    }),
    [selectableRowsRadio]
  );

  return (
    <DataTable
      title={
        <span className=" h-full w-full p-0 m-0 font-semibold">Usuários</span>
      }
      columns={getUserDataTableColumns}
      data={data}
      noDataComponent={NoDataComponent}
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
      paginationServer={paginationServer}
      paginationTotalRows={totalRows}
      paginationPerPage={rowsPerPage}
      highlightOnHover={highlightOnHover}
      striped={striped}
      pointerOnHover={pointerOnHover}
      dense={dense}
      noTableHead={noTableHead}
      persistTableHead={persistTableHead}
      progressPending={loading}
      progressComponent={ProgressComponent}
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
      paginationComponentOptions={{
        rowsPerPageText: 'Linhas por página:',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos',
      }}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handlePerRowsChange}
      paginationComponent={paginationComponent}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
};
