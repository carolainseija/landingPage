import React from 'react';
import './server.css';

function Server(){
    return(
        <div className="container-fluid">
         <div><h1 className="h1-servers">servicios</h1></div>
         <div className="container-server">
         <div className="container-server_mechanical"></div>
         <div className="container-server_locksmith"></div>
         <div className="container-server_accident"></div>
         </div>
        </div>
    )
}
export default Server;