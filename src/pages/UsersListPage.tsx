import UserList from '../components/UserList';
import Waves from '../components/Waves';
export default function UsersListPage() {
  return (
    <div className="z-0 flex flex-grow flex-col w-full m-0 py-2">
      <UserList />
      <Waves />
    </div>
  );
}
