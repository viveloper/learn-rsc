import Link from 'next/link';

export function SidebarMenu() {
  return (
    <aside className="fixed w-80 h-screen border-r p-4">
      <ul>
        <li>
          <Link
            className="hover:bg-slate-100 w-full flex px-3 py-2 rounded-lg"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-slate-100 w-full flex px-3 py-2 rounded-lg"
            href="/products-rsc"
          >
            Products(RSC)
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-slate-100 w-full flex px-3 py-2 rounded-lg"
            href="/products-csr"
          >
            Products(CSR)
          </Link>
        </li>
      </ul>
    </aside>
  );
}
