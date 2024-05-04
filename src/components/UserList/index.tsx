import { UserTable } from './subComponents/UserTable';

export default function UserList() {

  return (
    <div
      className="mt-4 flex flex-col justify-center items-center self-center content-center
     h-full w-11/12 mx-0 p-0"
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
