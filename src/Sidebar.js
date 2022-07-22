import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt="Spotify Logo"
        className="sidebar__logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" />
    </div>
  );
}

export default Sidebar;
