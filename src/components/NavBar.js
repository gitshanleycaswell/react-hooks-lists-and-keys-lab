import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLink = links.map((link, index) => {
    return <a href={`#${link}`} key ={index}>{link}</a>
  })

  return <nav>{newLink}</nav>;
}

export default NavBar;
