import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <Link to="/home" style={{ marginRight: 50 }}>Home</Link> 
            <Link to="/profile" style={{ marginRight: 50 }}>Profile</Link>
            <Link to="/teacherProfile" style={{ marginRight: 50 }}>Teacher Profile</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;