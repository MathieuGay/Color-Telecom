import React from 'react';
import '../styles/Header.css';

function Header() {

    return (
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col">Elit Dentaire<br/>01 01 01 01 01</div>
                    <div class="col">Forfait 5H<br/>///</div>
                    <div class="col">Crédit<br/>0,00 €</div>
                    <div class="col">
                        <button class='btn'>Standard ouvert</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
