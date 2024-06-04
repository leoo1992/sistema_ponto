import { useParams } from 'react-router-dom';

export default function UpdateUser() {
  const { id } = useParams();

  return (
    <div>
      User id: {id}
    </div>
  )
}
