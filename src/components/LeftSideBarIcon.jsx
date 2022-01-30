import React from "react";

export default function SideBarIcon() {
  return (
    <aside className="sidebar-icon">
      <div className="sidebar-logo_sm" role="button">
        <img
          src="./static/media/logo-icon.79d895e0.svg"
          alt=""
          className="img-fluid"
        />
      </div>

      <ul className="list sidebar-list">
        <li>
          <a className="sidebar-link active" href="#/!">
            <i className="ic-home"></i>
          </a>
        </li>
        <li>
          <div className="dropright dropdown">
            <a
              aria-haspopup="true"
              className="sidebar-link  "
              aria-expanded="false"
            >
              <i className="ic-bank"></i>
            </a>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu"
            >
              <ul className="list sidebar-list">
                <li>
                  <a className="sidebar-link " href="#/!">
                    <span>Link Account</span>
                  </a>
                </li>
                <li>
                  <a className="sidebar-link " href="#/!">
                    <span>Manage Accounts</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="dropright dropdown">
            <a
              aria-haspopup="true"
              className="sidebar-link  "
              aria-expanded="false"
            >
              <i className="ic-star"></i>
            </a>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu"
            >
              <ul className="list sidebar-list">
                <li>
                  <a className="sidebar-link " href="#/!">
                    <span>Add Favorite</span>
                  </a>
                </li>
                <li>
                  <a className="sidebar-link " href="#/!">
                    <span>List Favorite</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <div className="divider"></div>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-wallet"></i>
          </a>
        </li>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-bulb"></i>
          </a>
        </li>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-finance"></i>
          </a>
        </li>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-creditor"></i>
          </a>
        </li>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-donate"></i>
          </a>
        </li>
        <div className="divider"></div>
        <li>
          <a className="sidebar-link " href="#/!">
            <i className="ic-history"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
}
