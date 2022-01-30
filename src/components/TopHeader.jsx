import React from "react";

export default function TopHeader(props) {
  return (
    <header>
      <div className="header-01">
        <div className="container-fluid">
          <div className="header-container ">
            <div className="left flex-grow-1 position-relative justify-content-start">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-white des mr-3"
                role="button"
                height="1em"
                width="1em"
                onClick={props.leftToogle}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
              <div className="">
                <div className="form-control-icon lft flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Click here to Search."
                  />
                  <i className="ic-search"></i>
                </div>
                <div className="form-group-dialog card-basic px-0">
                  <div>
                    <h6 className="heading-05 px-3">Search Results For ""</h6>
                    <ul className="list list-04 mt-3">
                      <ul className="list list-04 mt-3">
                        <li className="px-3">
                          <h6 className="des">No Creditors Found</h6>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="right flex-grow-1 justify-content-end">
              <div className="align-vertical">
                <div className="dropdown">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    id="dropdownMenuButton"
                    className="p-0 text-white align-vertical dropdown-toggle btn btn-btn-link"
                  >
                    <div className="avatar-user bg-white">
                      <p className="font-semibold text-primary">
                        {props.user
                          .getUserData()
                          .user?.name.toUpperCase()
                          .charAt(0)}
                      </p>
                    </div>
                    <p className="ml-2 mr-1 font-semibold">
                      {props.user.getUserData().user?.name}
                    </p>
                  </button>
                  <div
                    tabIndex="-1"
                    role="menu"
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-menu"
                  >
                    <button
                      type="button"
                      tabIndex="0"
                      role="menuitem"
                      className="dropdown-item"
                    >
                      My Profile
                    </button>
                    <button
                      type="button"
                      tabIndex="0"
                      role="menuitem"
                      className="dropdown-item"
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      tabIndex="0"
                      role="menuitem"
                      className="dropdown-item"
                    >
                      My Accounts
                    </button>
                    <button
                      type="button"
                      tabIndex="0"
                      role="menuitem"
                      className="dropdown-item"
                      onClick={props.logout}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
