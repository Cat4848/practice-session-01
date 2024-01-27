import { Outlet, Link } from "react-router-dom";

export default function DashboardRoot() {
  return (
    <>
      <h1>Dashboard Layout</h1>;
      <nav>
        <ul>
          <li>
            <Link to="accounts">Accounts</Link>
          </li>
          <li>
            <Link to="reports">Reports</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
