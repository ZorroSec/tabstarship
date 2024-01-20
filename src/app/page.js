import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css"
import { createConnection } from "mysql2/promise";
import conn from "../../db/connection";
import { redirect } from "next/navigation";
import isIp from "../../queryIp/query";

export default async function Home() {
  const fetchIp = await fetch("https://api.ipify.org/?format=json")
  const ip = await fetchIp.json();
  console.log(ip)
  const [rows, fields] = await conn.query(`SELECT * FROM users WHERE ip = '${ip['ip']}'`)
  console.log(rows)
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <h4>TabStarship</h4>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Relevantes</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Recentes</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
            <a href="" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Conta
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">Novo post...</a></li>
              <li><a className="dropdown-item" href="#">Configurções</a></li>
              <li><a className="dropdown-item" href="#">Perfil</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </>
  );
}
