import { sleep } from '@/lib/utils';
import { ProductListTable } from './product-list-table';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  await sleep(1000);
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
  return res.json();
};

export function ProductListTableContainer() {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR('https://fakestoreapi.com/products?limit=5', fetcher);

  if (isLoading) {
    return <div>Loading... (Products)</div>;
  }

  if (error) {
    return <div>Error! (Products)</div>;
  }

  return <ProductListTable products={products} />;
}
