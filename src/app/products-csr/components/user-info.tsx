import { User } from '@/app/products-rsc/types/user';

export function UserInfo({ user }: { user: User }) {
  return (
    <div>
      <div>name : {user.username}</div>
      <div>email : {user.email}</div>
    </div>
  );
}
