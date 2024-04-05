import { Suspense } from 'react';
import { ProductListTable } from './components/product-list-table';
import { UserInfo } from './components/user-info';

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl mb-4">Products</h1>
      <Suspense fallback={<div>Loading... (User)</div>}>
        <UserInfo />
      </Suspense>
      <Suspense fallback={<div>Loading... (Products)</div>}>
        <ProductListTable />
      </Suspense>
    </main>
  );
}
