
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import "../styles/HoraireSelector.css";

export function HoraireSelector() {
    const [value, setValue] = useState([10, 17]);


    return (
        <>
            <div class="horaires">
                <h5>Horaires</h5>
                <div class="container w-14rem">
                    <div class="row">
                        <div class="col"><span class="horaire">{value[0]}h00</span></div>
                        <div class="col"><span class="horaire">{value[1]}h00</span></div>
                    </div>
                </div>
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range step={1} min={7} max={20} />
            </div>
        </>
    )
}
