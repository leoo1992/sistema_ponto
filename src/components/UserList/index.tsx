import UserTable from './subComponents/UserTable';

export default function UserList() {
  return (
    <div className="flex flex-col justify-center items-center self-center content-center h-full w-full m-0 p-2 sm:p-5 sm:max-w-7xl">
      <UserTable />
    </div>
  );
}
