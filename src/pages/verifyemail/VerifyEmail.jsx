import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import http from "./../../utils/http";
import notify from "./../../utils/notify";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let data = {};
  data.token = searchParams.get("token");
  useEffect(() => {
    http
      .POST("/user/verify-email", data)
      .then((response) => {
        // console.log(response);
        notify.showSuccess(response.data.message);
        navigate("/login", {
          replace: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        notify.handleError(err);
      });
  });
  return null;
}
