'use client';

import { ProductListTableContainer } from './components/product-list-table-container';
import { UserInfoContainer } from './components/user-info-container';

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl mb-4">Products</h1>
      <UserInfoContainer />
      <ProductListTableContainer />
    </main>
  );
}
