import useSWR from 'swr';
import { UserInfo } from './user-info';
import { sleep } from '@/lib/utils';

const fetcher = async (url: string) => {
  await sleep(500);
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
  return res.json();
};

export function UserInfoContainer() {
  const {
    data: user,
    isLoading,
    error,
  } = useSWR('https://fakestoreapi.com/users/1', fetcher);

  if (isLoading) {
    return <div>Loading... (User)</div>;
  }

  if (error) {
    return <div>Error! (User)</div>;
  }

  return user ? <UserInfo user={user} /> : null;
}
