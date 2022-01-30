import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="sidebar-link active" to="#">
            <i className="ic-home"></i>
          </Link>
        </li>
        <li>
          <div className="dropright dropdown">
            <Link
              aria-haspopup="true"
              className="sidebar-link  "
              aria-expanded="false"
              to="#"
            >
              <i className="ic-bank"></i>
            </Link>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu"
            >
              <ul className="list sidebar-list">
                <li>
                  <Link className="sidebar-link " to="#">
                    <span>Link Account</span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-link " to="#">
                    <span>Manage Accounts</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="dropright dropdown">
            <Link
              aria-haspopup="true"
              className="sidebar-link  "
              aria-expanded="false"
              to="#"
            >
              <i className="ic-star"></i>
            </Link>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu"
            >
              <ul className="list sidebar-list">
                <li>
                  <Link className="sidebar-link " to="#">
                    <span>Add Favorite</span>
                  </Link>
                </li>
                <li>
                  <Link className="sidebar-link " to="#">
                    <span>List Favorite</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <div className="divider"></div>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-wallet"></i>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-bulb"></i>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-finance"></i>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-creditor"></i>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-donate"></i>
          </Link>
        </li>
        <div className="divider"></div>
        <li>
          <Link className="sidebar-link " to="#">
            <i className="ic-history"></i>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
