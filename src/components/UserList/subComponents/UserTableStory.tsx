import { useCallback, useEffect, useMemo, useState } from "react";
import { getUserDataTableColumns } from "../../../utils/UserList/getUserDataTableColumns.util";
import { NoDataComponent } from "./NoDataComponent";
import { ProgressComponent } from "./ProgressComponent";
import { subHeaderComponent } from "./subHeaderComponent";
import DataTable from "react-data-table-component";
import UserListGET from "../../../services/UserList/UserListGET";
import Pagination from "./Pagination";
import UserDelete from "../../../services/UserList/UserDelete";
import UserDisable from "../../../services/UserList/UserDisable";
import { useNavigate } from "react-router-dom";
//import { data } from "../../../utils/UserList/data.util";

export const UserTableStory = ({
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const navigate = useNavigate();

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleEditSelected = (data: any) => {
      console.log(data);

      handleEdit(data);
      setToggleCleared(!toggleCleared);
    };
    const handleDisableSelected = (id: any) => {
      console.log(id);
      handleDisable({ id });
      setToggleCleared(!toggleCleared);
    };
    const handleDeleteSelected = (id: any) => {
      console.log(id);
      handleDelete({ id });
      setToggleCleared(!toggleCleared);
    };

    return (
      <div
        className="m-0 flex w-full content-center items-center
                    justify-end gap-1 self-center rounded-t-2xl p-2"
      >
        <button
          className="btn glass btn-primary btn-sm w-20 rounded-3xl bg-primary text-xs text-white"
          key="edit"
          onClick={() => handleEditSelected(selectedRows[0])}
        >
          Editar
        </button>
        <button
          className="btn glass btn-warning btn-sm rounded-3xl bg-warning text-xs"
          key="disable"
          onClick={() => handleDisableSelected(selectedRows[0]?.id)}
        >
          Desabilitar
        </button>
        <button
          className="btn glass btn-error btn-sm w-20 rounded-3xl bg-red-400 text-xs"
          key="delete"
          onClick={() => handleDeleteSelected(selectedRows[0]?.id)}
        >
          Deletar
        </button>
      </div>
    );
  }, [data, selectedRows, toggleCleared]);

  const fetchData = async () => {
    setLoading(true);
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
  }, [currentPage, rowsPerPage]);

  const handlePageChange = async (newPage: number) => {
    const totalPages = Math.ceil(totalElements / rowsPerPage);
    if (newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const handlePerRowsChange = async (
    currentRowsPerPage: number,
    _currentPage: number,
  ) => {
    setRowsPerPage(currentRowsPerPage);
    setCurrentPage(1);
  };

  const handleEdit = async ({
    id,
    name,
    email,
    cpf,
    position,
    sector,
    telefone,
    userRole,
  }: any) => {
    console.log(id, name, cpf, position, sector, telefone, userRole);

    try {
      const response = {
        id: id ? id : null,
        name: name ? name : null,
        email: email ? email : null,
        cpf: cpf ? cpf : null,
        position: position ? position : 0,
        sector: sector ? sector : 0,
        telefone: telefone ? telefone : null,
        userRole: userRole
          ? userRole
              .toLowerCase()
              .replace(/\b\w/g, (char: string) => char.toUpperCase())
          : 0,
      };

      navigate("/update", { state: response });
    } catch (error) {
      console.error("Failed to edit user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async ({ id }: any) => {
    setLoading(true);
    try {
      await UserDelete(id, navigate);
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id),
      );
      setTotalElements((prevTotalElements) => prevTotalElements - 1);
    } catch (error) {
      console.error("Failed to delete user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisable = async ({ id }: any) => {
    setLoading(true);
    try {
      await UserDisable(id, navigate);
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id),
      );
      setTotalElements((prevTotalElements) => prevTotalElements - 1);
    } catch (error) {
      console.error("Failed to disable user:", error);
    } finally {
      setLoading(false);
    }
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
      selectableRowsVisibleOnly
      selectableRowsSingle
      selectableRowsNoSelectAll
      selectableRows
      selectableRowsHighlight
      paginationRowsPerPageOptions={[5, 10, 15]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
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
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
    />
  );
};
