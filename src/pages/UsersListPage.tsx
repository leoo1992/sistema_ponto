import UserList from "../components/UserList";
import Waves from "../components/Waves";
export default function UsersListPage() {
  return (
    <div className="z-0 m-0 flex w-full flex-grow flex-col py-2">
      <UserList />
      <Waves />
    </div>
  );
}
