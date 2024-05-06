import { useEffect, useState } from "react";
import { getUserDataTableColumns } from "../../../utils/UserList/getUserDataTableColumns.util";
import { NoDataComponent } from "./NoDataComponent";
import { ProgressComponent } from "./ProgressComponent";
import { subHeaderComponent } from "./subHeaderComponent";
import DataTable from "react-data-table-component";
import UserListGET from "../../../services/UserList/UserListGET";
import Pagination from "./Pagination";
import ContextActionsComponent from "./ContextActions";
import UserDelete from "../../../services/UserList/UserDelete";
import UserDisable from "../../../services/UserList/UserDisable";
import UserEdit from "../../../services/UserList/UserEdit";
//import {data} from '../../../utils/UserList/data.util';

export const UserTableStory = ({
  expandableRows,
  pagination,
  highlightOnHover,
  striped,
  pointerOnHover,
  dense,
  persistTableHead,
  noHeader,
  fixedHeader,
  fixedHeaderScrollHeight,
  noTableHead,
  noContextMenu,
  direction,
  subHeader,
  subHeaderAlign,
  subHeaderWrap,
  responsive,
  disabled,
  paginationServer,
  paginationComponentOptions,
  defaultComponentOptions,
}: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expandedRow, setExpandedRow] = useState(null);

  const fetchData = async () => {
    try {
      const newData = await UserListGET(currentPage - 1, rowsPerPage);
      setData(newData.content);
      setTotalElements(newData.totalElements);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rowsPerPage, loading]);

  const handlePageChange = async (newPage: number) => {
    const totalPages = Math.ceil(totalElements / rowsPerPage);
    if (newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
      setExpandedRow(null);
    }
  };

  const handleExpandRow = (row: any) => {
    setExpandedRow(row === expandedRow ? null : row);
  };

  const handlePerRowsChange = async (
    currentRowsPerPage: number,
    _currentPage: number,
  ) => {
    setRowsPerPage(currentRowsPerPage);
    setCurrentPage(1);
    setExpandedRow(null);
  };

  const handleEdit = ({ id }: any) => {
    UserEdit(id);
  };

  const handleDelete = async ({ id }: any) => {
    UserDelete(id);
    setLoading(true);
  };

  const handleDisable = async ({ id }: any) => {
    UserDisable(id);
    await fetchData();
  };

  return (
    <DataTable
      key={currentPage}
      title={
        <span className=" m-0 h-full w-full p-0 font-semibold">Usuários</span>
      }
      columns={getUserDataTableColumns}
      data={data}
      noDataComponent={NoDataComponent}
      defaultSortFieldId={1}
      expandableRows={expandableRows}
      expandableRowsHideExpander={false}
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
      paginationComponent={() => (
        <Pagination
          rowsPerPage={rowsPerPage}
          rowCount={totalElements}
          currentPage={currentPage}
          paginationRowsPerPageOptions={[5, 10, 15]}
          paginationComponentOptions={paginationComponentOptions}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          numPages={Math.ceil(totalElements / rowsPerPage)}
          defaultComponentOptions={defaultComponentOptions}
        />
      )}
      paginationRowsPerPageOptions={[5, 10, 15]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      expandableRowsComponent={({ data }) => (
        <ContextActionsComponent
          handleEdit={() => handleEdit(data)}
          handleDelete={() => handleDelete(data)}
          handleDisable={() => handleDisable(data)}
        />
      )}
      onRowExpandToggled={handleExpandRow}
      expandableRowsComponentProps={{
        expandableRowsComponent: (
          <ContextActionsComponent
            handleEdit={() => handleEdit(expandedRow)}
            handleDelete={() => handleDelete(expandedRow)}
            handleDisable={() => handleDisable(expandedRow)}
          />
        ),
        isRowExpandable: () => true,
        expandedRow: expandedRow,
        onRowExpandToggled: handleExpandRow,
      }}
    />
  );
};
