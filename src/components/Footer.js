import { Slider } from 'primereact/slider';
import React, { useState } from 'react';
import "../styles/Footer.css";




export function Footer() {
    const [value1, setValue1] = useState(null);
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-2"><h5>Essai gratuit</h5></div>
                    <div class="col-10"><h6>30 minutes d'appel restantes dans votre période d'essai</h6></div>
                </div>
            </div>
            <div class="container bottom">
                <div class="row">
                    <div class="col-9">
                        <Slider value={value1} onChange={(e) => setValue1(e.value)} disabled />
                    </div>
                    <div class="col-3"><button class='btn'>Choisir un plan</button></div>
                </div>
                <div class="row">
                    <div class="col-9"><span>30 min</span><span>0 min</span></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
}
