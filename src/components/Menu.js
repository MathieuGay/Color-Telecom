import React from 'react';
import '../styles/Menu.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logostandard from "../assets/img/logo_standard.svg";
import { Link } from 'react-router-dom';

function Menu() {
  return (


    <div className="navbar-container">
      <div class="row">
        <div class="col"><Link to="/"><img src={logostandard} /></Link></div>
      </div>
      <div class="row">
        <div class="col-4 icon text-center">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div class="col-8">
          <Link to="/blank">Mes appels</Link>
        </div>
      </div>
      <div class="row">
        <div class="col-4 icon text-center">
          <FontAwesomeIcon className='icon' icon={faGear} />
        </div>
        <div class="col-8">
          <Link to="/blank">Configuration</Link>
        </div>
      </div>
      <div class="row">
        <div class="col-4 icon text-center">
          <FontAwesomeIcon className='icon' icon={faUser} />
        </div>
        <div class="col-8">
          <Link to="/blank">Compte</Link>
        </div>
      </div>
      <div class="row">
        <div class="col-4 icon text-center">
          <FontAwesomeIcon className='icon' icon={faCartShopping} />
        </div>
        <div class="col-8">
          <Link to="/blank">Boutique</Link>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col-4 icon text-center">
          <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
        </div>
        <div class="col-8">
          <Link to="/blank">Déconnexion</Link>
        </div>
      </div>
    </div>


  );
}

export default Menu;
