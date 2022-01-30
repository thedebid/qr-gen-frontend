import React from "react";
import { Link } from "react-router-dom";
export default function LeftSideBar(props) {
  return (
    <aside className="sidebar-01">
      <div className="sidebar-toggler">
        <button onClick={props.toogle} className="btn btn-rounded-cool-gray-70">
          <i className="ic-close"></i>
        </button>
      </div>
      <div className="app-flex-layout">
        <div classNam e="sidebar-logo" role="button">
          <img src="./static/media/newLogo.ed7f73c8.png" alt="" />
        </div>

        <ul className="list sidebar-list">
          <li>
            <Link className="sidebar-link active" to="/dashboard">
              <i className="ic-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="generatedqr">
              <i className="ic-home"></i>
              <span>Generated QR</span>
            </Link>
          </li>
          {/* <div className="divider"></div>
          <li>
            <a className="sidebar-link " href="#/!">
              <i className="ic-wallet"></i>
              <span>Government of Nepal</span>
            </a>
          </li>
          <li>
            <a className="sidebar-link " href="#/!">
              <i className="ic-bulb"></i>
              <span>Utilities Payment</span>
            </a>
          </li>
          <li>
            <a className="sidebar-link " href="#/!">
              <i className="ic-finance"></i>
              <span>Financial Institution</span>
            </a>
          </li>
          <li>
            <a className="sidebar-link " href="#/!">
              <i className="ic-creditor"></i>
              <span>Creditors Payment</span>
            </a>
          </li>
          <li>
            <a className="sidebar-link " href="#/!">
              <i className="ic-donate"></i>
              <span>Other Services</span>
            </a>
          </li> */}
          <div className="divider"></div>
          {/* <li>
            <i className="ic-history"></i>
            <span>Payment History</span>
          </li> */}
        </ul>

        <div className="sidebar-footer">
          <div className="dropup dropdown">
            <Link
              id="UncontrolledTooltipExample"
              role="button"
              aria-haspopup="true"
              className=""
              aria-expanded="false"
            >
              <i className="ic-call font-weight-bold"></i>
            </Link>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu"
            >
              {/* <h6 tabIndex="-1" className="dropdown-header">
                <h6 className="des font-semibold text-gray-110 mb-2">
                  Contact Us
                </h6>
              </h6> */}
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                {/* <a href="mailto:support@nchl.com.np">
                  <i className="ic-mail"></i>support@nchl.com.np
                </a> */}
              </button>
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                {/* <a href="">
                  <i className="ic-call"></i>
                  <a href="#">16600155306(Toll Free)</a>
                </a> */}
              </button>
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                {/* <a href="">
                  <i className="ic-clock"></i>
                  <a href="#">Support Hours: 9:30 AM - 6:00PM</a>
                </a> */}
              </button>
            </div>
          </div>
          {/* <div className="ml-2 dropup dropdown">
            <a
              id="UncontrolledTooltipExample01"
              aria-haspopup="true"
              className=""
              aria-expanded="false"
            >
              <i className="ic-question-solid font-weight-bold"></i>
            </a>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu dropdown-menu-right"
            >
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                <div className="align-vertical justify-content-between">
                  Fee &amp; Charges
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                <div className="align-vertical justify-content-between">
                  Transaction Limit
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                type="button"
                tabIndex="0"
                role="menuitem"
                className="dropdown-item"
              >
                <div className="align-vertical justify-content-between">
                  FAQ
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </aside>
  );
}
