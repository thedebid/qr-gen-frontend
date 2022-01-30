import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import http from "./../../utils/http";
import notify from "./../../utils/notify";

export default function SerPass() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("token"));
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must and should match"),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(validationOpt);
  const onSubmit = (data) => {
    data.token = searchParams.get("token");
    console.log(data);
    http
      .POST("/user/reset-password", data)
      .then((response) => {
        console.log(response);
        notify.showSuccess(response.data.message);
        // auth.setLoginData(response);
        // auth.setIsLoggedIn();
        navigate("/login", {
          replace: true,
        });
      })
      .catch((err) => {
        console.log(err);
        notify.handleError(err);
      });
  };
  //   console.log(errors);

  let errorStyle = {
    borderWidth: "1px 1px 1px 10px",
    borderStyle: "solid",
    borderColor:
      "rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)",
    borderImage: "initial",
    background: "rgb(251, 236, 242)",
  };

  return (
    <section className="login">
      <div className="login-grid">
        <div className="login-left">
          <div className="media-wrapper">
            {/* <div className="slick-slider slider-login slick-initialized" dir="ltr">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style="width: 1650px; opacity: 1; transform: translate3d(-990px, 0px, 0px); transition: -webkit-transform 800ms ease 0s;"
                  >
                    <div
                      data-index="-1"
                      tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style="width: 330px;"
                    >
                      <div>
                        <div
                          className="image-container"
                          tabindex="-1"
                          style="width: 100%; display: inline-block;"
                        >
                          <img src="./static/media/login1.69f40f07.jpg" alt="" />
                        </div>
                        <div></div>
                        <div
                          data-index="0"
                          className="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style="outline: none; width: 330px;"
                        >
                          <div>
                            <div
                              className="image-container"
                              tabindex="-1"
                              style="width: 100%; display: inline-block;"
                            >
                              <img
                                src="./static/media/login.8ec9bc94.jpeg"
                                alt=""
                              />
                            </div>Link"
                        >
                          <div>
                            <div
                              className="image-container"
                              tabindex="-1"
                              style="width: 100%; display: inline-block;"
                            >
                              <img
                                src="./static/media/login1.69f40f07.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          tabindex="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style="width: 330px;"
                        >Link
                        >
                          <div>
                            <div
                              className="image-container"
                              tabindex="-1"
                              style="width: 100%; display: inline-block;"
                            >
                              <img
                                src="./static/media/login1.69f40f07.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="slick-dots" style="display: block;">
                      <li className="slick-active">
                        <button>1</button>
                      </li>
                      <li className="">
                        <button>2</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
          </div>
        </div>

        <div className="login-right">
          <div className="login-logo">
            {/* <img
              src="https://login.connectips.com/retail/static/media/logo.1c6bc5c9.png"
              alt=""
            /> */}
          </div>
          <div className="w-100">
            <h6>Reset Password</h6>
            <p className="font-weight-bold  mt-4 mb-3">Enter new password</p>

            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control "
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  {...register("password")}
                  style={errors.password ? errorStyle : {}}
                />{" "}
                {errors.password && (
                  <span className="errorText">{errors.password?.message}</span>
                )}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control "
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  style={errors.confirmPassword ? errorStyle : {}}
                />
                {errors.confirmPassword && (
                  <span className="errorText">
                    {errors.confirmPassword?.message}
                  </span>
                )}
              </div>
              <button className="btn btn-primary my-4 w-100" type="submit">
                Continue
              </button>
            </form>
            {/* <p className="text-center text-gray-60 mb-4">
              Already have a user?{" "}
              <Link to="/login" className="text-primary text-underline">
                Login
              </Link>
            </p> */}
            <div className="d-flex align-items-center justify-content-center">
              <div className="icon">
                <i className="ic-mail text-white"></i>
              </div>
              <p className="text-primary">
                Email us:{" "}
                <Link
                  //  href="mailto:support@qrgen.com"
                  className="font-weight-bold"
                >
                  {" "}
                  support@qrgen.com
                </Link>
              </p>
            </div>
          </div>
          <small className="mt-auto text-cool-gray-100 pt-2">
            Copyright © QRGen Pvt Ltd. 2021
          </small>
        </div>
      </div>
    </section>
  );
}
