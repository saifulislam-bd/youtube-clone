import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/jack.png";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menuIcon} alt="menu" className="menu-icon" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} alt="logo" className="search-icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="upload" />
        <img src={moreIcon} alt="more" />
        <img src={notificationIcon} alt="notification" />
        <img src={profileIcon} alt="profile-icon" className="user-profile" />
      </div>
    </nav>
  );
};

export default Navbar;
