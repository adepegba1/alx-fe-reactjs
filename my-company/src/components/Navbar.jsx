import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <p>Logo</p>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "2rem",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
