import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a className="navbar-brand btn btn-success" href="/saved">
        Saved
      </a>
      <a className="navbar-brand btn btn-warning" href="/">
        Search
      </a>
    </nav>
  );
}

export default Nav;
