import React from "react";
import "./server.css";
import Card from "../../components/Cards/Card";

function Server(props) {
  return (
    <div className="container-fluid">
      <div>
        <h1 className="h1-servers">SERVICIOS</h1>
      </div>
      <div className="container-server d-flex justify-content-around">
        <Card
          classOne="container-server_root"
          classTwo="container-server_mechanical"
          classText="container-text"
          text="Mecanico"
          descriptionOne="Servicio 24 hs"
          descriptionTwo="Silla para niños"
          descriptionThree="Repuestos originales"
          descriptionFour="Montevideo y Canelones"
        />
        <Card
          classOne="container-server_root"
          classTwo="container-server_accident"
          classText="container-text"
          text="Seguro por accidente"
          descriptionOne="Corresponde para terceros"
          descriptionTwo="Todo el Uruguay"
          descriptionThree="Perdida total por incendio"
          descriptionFour="Todo el Uruguay"
        />
        <Card
          classOne="container-server_root"
          classTwo="container-server_locksmith"
          classText="container-text"
          text="Cerrajeria"
          descriptionOne="Servicio 24 hs"
          descriptionTwo="Todo tipo de puertas"
          descriptionThree="Canbio de pestillos"
          descriptionFour="Montevideo,Canelones y Flores"
        />
      </div>
    </div>
  );
}
export default Server;
