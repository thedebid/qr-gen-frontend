import React, { useEffect, useState, useContext } from "react";
import LeftSideBarIcon from "../../components/LeftSideBarIcon";
import LeftSideBar from "../../components/LeftSideBar";
import http from "./../../utils/http";
import { useNavigate, Link } from "react-router-dom";
import { QRGENContext } from "./../../context/context";
import TopHeader from "../../components/TopHeader";
import { Outlet } from "react-router-dom";

export default function Main() {
  const [qrGenerated, setQrGenerated] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const { user } = useContext(QRGENContext);
  // console.log(user.getUserData().user.name);
  const leftToogle = () => {
    // console.log(isOpen);
    if (isOpen) {
      setIsOpen(false);
      document.querySelector(".app-flex-layout").classList.add("toggled");
      document.querySelector(".sidebar-01").classList.add("toggled");
      document.getElementById("wrapper").classList.add("toggled");
      document.querySelector(".sidebar-icon").classList.add("toggled");
      const backdrop = document.querySelector(".app-right-backdrop");
      backdrop.parentElement.removeChild(backdrop);
    } else {
      setIsOpen(true);
      document.querySelector(".app-flex-layout").classList.remove("toggled");
      document.querySelector(".sidebar-01").classList.remove("toggled");
      document.getElementById("wrapper").classList.remove("toggled");
      document.querySelector(".sidebar-icon").classList.remove("toggled");
      const backdropParent = document.getElementById("overlay-portal");
      let div = document.createElement("div");
      div.classList.add("app-right-backdrop");
      backdropParent.appendChild(div);
    }
  };

  const [isRightToogleOpen, setIsRightToogleOpen] = useState(true);
  const rightToogle = () => {
    // console.log("CLICKED");
    if (isRightToogleOpen) {
      setIsRightToogleOpen(false);
      document.querySelector(".app-right-toggler").classList.add("toggled");
      document.querySelector(".app-right").classList.add("toggled");
    } else {
      setIsRightToogleOpen(true);
      document.querySelector(".app-right-toggler").classList.remove("toggled");
      document.querySelector(".app-right").classList.remove("toggled");
    }
  };
  useEffect(() => {
    http
      .POST("/qr/gen", { id: user.getUserData().user.id })
      .then((response) => {
        setQrGenerated(true);
        document.getElementById("qrContainer").innerHTML = response.data.qr;
      })
      .catch((err) => {
        console.log(err);
        // notify.handleError(err);
      });
  });

  const logout = () => {
    localStorage.clear();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      {" "}
      <LeftSideBarIcon />
      <LeftSideBar toogle={leftToogle} />
      <div
        id="wrapper"
        className="app-flex-layout"
        //   style="overflow-y: auto;"
      >
        <TopHeader user={user} leftToogle={leftToogle} logout={logout} />
        <div className="app-height app-wrapper-layout">
          <main className="app-full-height app-flex-layout app-main-layout position-relative">
            <div className="app-flex-layout">
              <div className="flex-grow-1 position-relative">
                <div className="app-full-height app-absolute-layout scrollable">
                  <div className="container-fluid app-height">
                    <div className="app-flex-layout">
                      <div className="flex-grow-1">
                        <Outlet />
                        {/* <Routes>
                          <Route path="welcome" element={<UsersIndex />} />

                          <Route path="me" element={<OwnUserProfile />} />
                        </Routes> */}

                        {/* <section className="section-inner">
                          <h6 className="heading-01">Fund Transfer</h6>
                          <div className="row">
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/bank.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>Bank Account</p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/own.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>Own Account</p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/fav.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>Favorite Account</p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/wallet.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>Wallet</p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/nepalpay.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>NEPALPAY Instant</p>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-3 mt-2">
                              <a className="card-01" href="#/!">
                                <div className="align-vertical">
                                  <img
                                    src="https://www.connectips.com/cdn/CIPS/Retail/creditors/r2ppay.png"
                                    alt=""
                                    className=""
                                  />
                                  <p>NEPALPAY Request</p>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="card-basic mt-2">
                              <h6 className="heading-01 mb-3">Payments</h6>
                              <div className="tab-scrollable flex-grow-1 h-100">
                                <ul className="tab-03 nav nav-tabs">
                                  <li className="nav-item">
                                    <a className="active nav-link">
                                      <div className="align-vertical">
                                        <i
                                          className="mr-2  ic-wallet"
                                          //   style="font-size: 1rem;"
                                        ></i>
                                        Government of Nepal
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link">
                                      <div className="align-vertical">
                                        <i
                                          className="mr-2  ic-bulb"
                                          //   style="font-size: 1rem;"
                                        ></i>
                                        Utilities Payment
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link">
                                      <div className="align-vertical">
                                        <i
                                          className="mr-2  ic-finance"
                                          //   style="font-size: 1rem;"
                                        ></i>
                                        Financial Institution
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link">
                                      <div className="align-vertical">
                                        <i
                                          className="mr-2  ic-creditor"
                                          //   style="font-size: 1rem;"
                                        ></i>
                                        Creditors Payment
                                      </div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link">
                                      <div className="align-vertical">
                                        <i
                                          className="mr-2  ic-donate"
                                          //   style="font-size: 1rem;"
                                        ></i>
                                        Other Services
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-content">
                                <div className="tab-pane active">
                                  <div className="row mt-2">
                                    <div
                                      className="col-sm-6 col-lg-4 col-xl-3 mt-2"
                                      role="button"
                                    >
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/govt.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            Government of Nepal
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div
                                      className="col-sm-6 col-lg-4 col-xl-3 mt-2"
                                      role="button"
                                    >
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/govt.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            Semi-Govt.(Sansthan)
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-basic mb-2">
                            <div className="align-vertical justify-content-between mb-3">
                              <h6 className="heading-01 ">Whats New</h6>
                            </div>
                            <div
                              className="slick-slider slider-creditor slick-initialized"
                              dir="ltr"
                            >
                              <button
                                type="button"
                                data-role="none"
                                className="slick-arrow slick-prev"
                                // style="display: block;"
                              >
                                {" "}
                                Previous
                              </button>
                              <div className="slick-list">
                                <div
                                  className="slick-track"
                                  //   style="width: 1351px; opacity: 1; transform: translate3d(-386px, 0px, 0px);"
                                >
                                  <div
                                    data-index="0"
                                    className="slick-slide"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/cit.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            CIT Pension
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="1"
                                    className="slick-slide"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/dofee.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            DOFE Organization
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="2"
                                    className="slick-slide slick-active slick-current"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/govt.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            LokSewa
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="3"
                                    className="slick-slide slick-active"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/ntcprepaid.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            NTC Mobile
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="4"
                                    className="slick-slide slick-active"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/brokers.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            Brokers Payment
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="5"
                                    className="slick-slide
                                 slick-active"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 
                                 px-3"
                                        href="#/welcome"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md">
                                            <img
                                              src="https://www.connectips.com/cdn/CIPS/Retail/creditors/creditCard.png"
                                              alt=""
                                            />
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            Credit Card
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    data-index="6"
                                    className="slick-slide slick-active"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 193px;"
                                  >
                                    <div>
                                      <a
                                        className="card_bordered card_equal py-2 px-3"
                                        tabIndex="-1"
                                        href="#/whats-new"
                                        // style="width: 100%; display: inline-block;"
                                      >
                                        <div className="align-vertical">
                                          <div className="image-md align-vertical">
                                            <i className="ic ic-more"></i>
                                          </div>
                                          <p className="small text-gray-90 ml-2 clamp-2">
                                            View More
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                data-role="none"
                                className="slick-arrow 
                                              slick-next slick-disabled"
                                // style="display: block;"
                              >
                                {" "}
                                Next
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="card-stat card_equal primary">
                                <div
                                  className="d-flex flex-column
                                                   justify-content-between h-100"
                                >
                                  <div className="card-body">
                                    <div className="align-vertical justify-content-between">
                                      <h6 className="heading-01">
                                        Primary Account
                                      </h6>
                                      <a
                                        href="#"
                                        className="heading-06 text-primary"
                                      >
                                        Change Primary
                                      </a>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                      <div className="d-flex">
                                        <div className="image-lg mr-3">
                                          <img
                                            src="https://www.connectips.com/cdn/CIPS/Retail/banklogo/2501.png"
                                            alt=""
                                          />
                                        </div>
                                        <div>
                                          <div className="align-vertical">
                                            <i className="ic-star-solid small text-warning mr-1"></i>
                                            <h6
                                              className="text-primary 
                                                            font-semibold"
                                            >
                                              ∗∗∗∗0015
                                            </h6>
                                            <i
                                              className="ic-verified-checkmark-solid text-success ml-1"
                                              id="primartAccountTooltip"
                                            ></i>
                                          </div>
                                          <p className="text-cool-gray-100 mt-1">
                                            DebidNMB
                                          </p>
                                          <p className="heading mt-2">
                                            NMB Bank Limited
                                          </p>
                                          <p className="text-cool-gray-100 mt-1">
                                            Narayangadh Branch
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-footer p-2">
                                    <div>
                                      <a
                                        role="button"
                                        className="d-flex align-items-center 
                                                                justify-content-center mx-2"
                                      >
                                        <i
                                          className="ic-view  mr-2"
                                          role="button"
                                          id="downloadView"
                                        ></i>
                                        Check Balance
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7 mt-3 mt-lg-0">
                              <div className="card-basic card_equal p-3">
                                <div
                                  className="align-vertical 
                                                                justify-content-between mb-2"
                                >
                                  <h6 className="heading-01 ">
                                    Other Accounts
                                  </h6>
                                </div>
                                <div className="row">
                                  <div className="col mt-2">
                                    <a
                                      className="card-dashed card_equal px-2 py-3"
                                      href="#/link-bank-account"
                                    >
                                      <div className="align-vertical justify-content-center h-100">
                                        <i className="ic-add text-cool-gray-100 mr-2"></i>
                                        <p className="text-cool-gray-100">
                                          Add New Account
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="home-advertisment my-2">
                            <div className="slick-slider slick-initialized">
                              <div className="slick-list">
                                <div
                                  className="slick-track"
                                  //   style="width: 980px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                                >
                                  <div
                                    data-index="0"
                                    className="slick-slide slick-active slick-current"
                                    tabIndex="-1"
                                    aria-hidden="false"
                                    // style="outline: none; width: 980px;"
                                  >
                                    <div>
                                      <div
                                        className="image"
                                        tabIndex="-1"
                                        // style="width: 100%; display: inline-block;"
                                      >
                                        <img
                                          src="https://www.connectips.com/cdn/CIPS/Retail/appbanner/neabannernew.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-basic mt-1">
                            <div className="align-vertical justify-content-between mb-3">
                              <h6 className="heading-01 ">
                                We are accepted at
                              </h6>
                            </div>
                            <div className="row mt-2">
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="http://eportal.licnepal.com.np:8081/online/lic/portal/poldetail.xhtml"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/lic-logo.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Lic Nepal Limited
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://epay.metlife.com.np/"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/metLife.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Met Life Insurance
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://www.bhojdeals.com/"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/bhojdeal.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Bhojdeals
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://www.buddhaair.com/"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/buddha.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Buddha Air
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://www.yetiairlines.com/"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/Yeti_Airlines.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Yeti Airlines
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://www.shreeairlines.com/"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/shree_airlines.png"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      Shree Airlines
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="col-sm-6 col-lg-4 col-xl-3 mt-2">
                                <a
                                  href="https://www.qfxcinemas.com/home"
                                  target="_blank"
                                  className="card_bordered card_equal py-2 px-3"
                                >
                                  <div className="align-vertical">
                                    <div className="image-md">
                                      <img
                                        src="https://www.connectips.com/cdn/CIPS/Retail/creditors/Qfx_Cenimas.PNG"
                                        alt=""
                                      />
                                    </div>
                                    <p className="small text-gray-90 ml-2 clamp-2">
                                      QFX Cinemas
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section> */}
                      </div>
                      <div className="text-center pb-2">
                        <small className="text-cool-gray-100">
                          {/* Copyright © Nepal Clearing House Limited. 2018-2021 */}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="app-right-toggler">
            <button
              className="btn btn-rounded-cool-gray-70"
              onClick={rightToogle}
            >
              <i className="ic-arrow-right"></i>
            </button>
          </div>
          <div className="app-right">
            <div className="card-user">
              <h6>Welcome Debid,</h6>
              <span className="my-2">
                <i className="ic-mail mr-2"></i>
                <span>linkwithdm@gmail.com</span>
              </span>
              {/* <span>
                <i className="ic-call mr-2"></i>
                <span>9823309743</span>
              </span> */}
              <div className="media-wrapper">
                {/* <img src="./static/media/logo-tp.38b5efc9.svg" alt="" /> */}
              </div>
            </div>
            <div className="align-vertical justify-content-between mt-4 mb-2">
              <div className="align-vertical"></div>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <ul className="list list-divider list-hover">
                  <li className="align-vertical  justify-content-center creditorBorder">
                    <Link role="button" to="#">
                      <div className="align-vertical ">
                        <i className="ic-add mr-2"></i>
                        <p>
                          {qrGenerated
                            ? "Your QR Code is activated"
                            : "Your QR Code is not activated"}
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-advertisement slider-right">
              <div id="qrContainer"></div>
              {/* <img
                role="button"
                src={qrSrc}
                alt="QR Code"
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt=""
                tabIndex="-1"
                //   style="width: 100%; display: inline-block;"
              /> */}
            </div>
            {qrGenerated ? (
              <div className="tab-content">
                <div className="tab-pane active">
                  <ul className="list list-divider list-hover">
                    <li className="align-vertical  justify-content-center creditorBorder">
                      <Link role="button" tp="#">
                        <div className="align-vertical ">
                          <i className="ic-add mr-2"></i>
                          <p>Download your QR Code</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}{" "}
            {/* <div className="card-advertisement slider-right">
              <img
                role="button"
                // src={qrSrc}
                alt="QR Code"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt=""
                tabIndex="-1"
                //   style="width: 100%; display: inline-block;"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div id="overlay-portal">
        <div className="app-right-backdrop"></div>
      </div>
    </>
  );
}
