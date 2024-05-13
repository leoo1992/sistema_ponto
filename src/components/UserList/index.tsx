import { UserTable } from "./SubComponents/UserTable";

export default function UserList() {
  return (
    <div
      className="mx-0 mt-4 flex h-full w-11/12 flex-col content-center
     items-center justify-center self-center p-0"
    >
      <UserTable
        progressComponent
        pagination
        expandableRows
        expandOnRowClicked
        expandOnRowDoubleClicked
        paginationServer
        actions
        defaultSortField="name"
        striped
        dense
        highlightOnHover
        pointerOnHover
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        responsive
      />
    </div>
  );
}
