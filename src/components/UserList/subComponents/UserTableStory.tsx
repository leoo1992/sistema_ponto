import { useEffect, useMemo, useState } from 'react';
import { getUserDataTableColumns } from '../../../utils/UserList/getUserDataTableColumns.util';
import { NoDataComponent } from './NoDataComponent';
import { ProgressComponent } from './ProgressComponent';
import { subHeaderComponent } from './subHeaderComponent';
import DataTable from 'react-data-table-component';
import UserListGET from '../../../services/UserList/UserListGET';
import Pagination from './Pagination';
//import {data} from '../../../utils/UserList/data.util';

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
  paginationServer,
  paginationComponentOptions,
  defaultComponentOptions,
}: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log(currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await UserListGET(currentPage - 1, rowsPerPage);
        setData(newData.content);
        setTotalElements(newData.totalElements);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [currentPage, setRowsPerPage]);

  const selectableRowsComponentProps = useMemo(
    () => ({
      type: 'radio',
    }),
    [selectableRowsRadio]
  );

  const handlePageChange = async (newPage: number) => {
    const totalPages = Math.ceil(totalElements / rowsPerPage);
    if (newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const handlePerRowsChange = async (
    currentRowsPerPage: number,
    _currentPage: number
  ) => {
    setRowsPerPage(currentRowsPerPage);
    setCurrentPage(1);
  };

  return (
    <DataTable
      key={currentPage}
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
      paginationTotalRows={totalElements}
      paginationComponentOptions={paginationComponentOptions}
      paginationComponent={() => Pagination({
        rowsPerPage,
        totalElements,
        currentPage,
        paginationRowsPerPageOptions,
        paginationComponentOptions,
        handlePerRowsChange,
        handlePageChange,
        defaultComponentOptions,
      })}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onSelectedRowsChange={onSelectedRowsChange}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  );
};
