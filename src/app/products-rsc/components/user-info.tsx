import { User } from '../types/user';
import { getData } from '../utils';

export async function UserInfo() {
  const user: User = await getData('https://fakestoreapi.com/users/1', 1000);

  return (
    <div>
      <div>name : {user.username}</div>
      <div>email : {user.email}</div>
    </div>
  );
}
