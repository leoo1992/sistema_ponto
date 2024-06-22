import { useCallback, useEffect, useMemo, useState } from "react";
import { getUserDataTableColumns } from "../../../../utils/User/UserList/getUserDataTableColumns.util";
import { NoDataComponent } from "../../../UX/TablesComponents/NoDataComponent";
import { ProgressComponent } from "../../../UX/TablesComponents/ProgressComponent";
import { subHeaderComponent } from "../../../UX/TablesComponents/subHeaderComponent";
import DataTable from "react-data-table-component";
import UserListGET from "../../../../services/User/UserListGET";
import Pagination from "../../../UX/TablesComponents/Pagination";
import UserDelete from "../../../../services/User/UserDelete";
import UserDisable from "../../../../services/User/UserDisable";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "../../../UX/Modal/ConfirmModal";

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
  const [data, setData] = useState<any>();
  const [totalElements, setTotalElements] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [_confirm, setConfirm] = useState(false);
  const [selectedDeleteID, setSelectedDeleteID] = useState<null | any>();
  const [selectedDisableID, setSelectedDisableID] = useState<null | any>();
  const navigate = useNavigate();

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDeleteConfirmed = async () => {
    await handleDelete(selectedDeleteID);
  };
  const handleDisableConfirmed = async () => {
    await handleDisable(selectedDisableID);
  };

  const handleDelete = async (id: any) => {
    setLoading(true);
    try {
      await UserDelete(id, navigate);
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id),
      );
      setTotalElements((prevTotalElements: any) => prevTotalElements - 1);
    } catch (error) {
      console.error("Failed to delete user:", error);
    } finally {
      setLoading(false);
      setConfirm(false);
      setSelectedDeleteID(null);
      setToggleCleared(!toggleCleared);
    }
  };

  const contextActions = useMemo(() => {
    const handleEditSelected = async (data: any) => {
      await handleEdit(data);
    };

    const handleDisableSelected = (id: any) => {
      setModalOpen2(true);
      setSelectedDisableID(id);
      setToggleCleared(!toggleCleared);
    };

    const handleDeleteSelected = (id: any) => {
      setModalOpen(true);
      setSelectedDeleteID(id);
      setToggleCleared(!toggleCleared);
    };

    return (
      <div
        className="m-0 flex w-full content-center items-center
                    justify-start gap-1 self-center rounded-t-2xl p-2"
      >
        <button
          className="btn glass btn-primary btn-sm w-20 rounded-3xl bg-primary text-xs text-white"
          key="edit"
          onClick={() => {
            handleEditSelected(selectedRows[0]);
          }}
        >
          Editar
        </button>
        <button
          className="btn glass btn-warning btn-sm rounded-3xl bg-warning text-xs"
          key="disable"
          onClick={() => {
            handleDisableSelected(selectedRows[0]?.id);
          }}
        >
          Desabilitar
        </button>
        <button
          className="btn glass btn-error btn-sm w-20 rounded-3xl bg-red-400 text-xs"
          key="delete"
          onClick={() => {
            handleDeleteSelected(selectedRows[0]?.id);
          }}
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
      setData(await newData?.content);
      setTotalElements(await newData?.totalElements);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
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
    id
  }: any) => {
    try {
      const response = {
        id: id || null,
      };

      navigate(`/update-user/${response.id}`);
    } catch (error) {
      console.error("Failed to edit user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisable = async (id: number) => {
    setLoading(true);
    try {
      await UserDisable(id, navigate);
      setData((prevData: any) =>
        prevData.filter((item: any) => item.id !== id),
      );
      setTotalElements((prevTotalElements: any) => prevTotalElements - 1);
    } catch (error) {
      console.error("Failed to disable user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ConfirmModal
        open={modalOpen}
        setIsOpen={setModalOpen}
        setConfirm={handleDeleteConfirmed}
        idModal="1"
        setSelectedID={setSelectedDeleteID}
      />
      <ConfirmModal
        open={modalOpen2}
        setIsOpen={setModalOpen2}
        setConfirm={handleDisableConfirmed}
        idModal="2"
        setSelectedID={setSelectedDisableID}
        text="desabilitar"
      />
      <DataTable
        key={currentPage}
        title={
          <span className=" m-0 h-full w-full p-0 font-semibold">Usuários</span>
        }
        columns={getUserDataTableColumns}
        data={data}
        noDataComponent={NoDataComponent("Sem usuários cadastrados")}
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
        subHeaderComponent={subHeaderComponent("/register-user")}
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
    </>
  );
};
