import "./Nav.css";
import Search from "../Search";
function Nav() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
          alt="Netflix Logo"
          className="nav_logo_img"
        />
      </div>
      <ul className="nav_links">
        <li className="nav_link">Home</li>
        <li className="nav_link">Tv Show</li>
        <li className="nav_link">Movie</li>
        <li className="nav_link">Latest</li>
        <li className="nav_link">My List</li>
      </ul>
      <Search/>
    </div>
  );
}
export default Nav;
