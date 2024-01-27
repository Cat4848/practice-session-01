import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="careers">Careers</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
