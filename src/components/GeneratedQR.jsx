import React, { useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import http from "./../utils/http";

export default function GeneratedQR(props) {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  useEffect(() => {
    http
      .GET("/qr/genereated/" + props.user.getUserData().user.id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        // notify.handleError(err);
      });
  });

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
