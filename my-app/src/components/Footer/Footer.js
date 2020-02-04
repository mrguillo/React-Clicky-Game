import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div class="d-flex flex-column fluid" className="text-center">
      <footer class="footer">
        <div class="ml-auto">
          <span>The Rikitikitavi, Rick and Morty Clicky Game bitch! </span>
        </div>
        <div>
          <a href="https://github.com/mrguillo/React-Clicky-Game">Vist my Repo </a>
          <span>&copy; {new Date().getFullYear()} .Salcedo</span>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;