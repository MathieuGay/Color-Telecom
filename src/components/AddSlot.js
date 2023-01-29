import { Button } from 'primereact/button';
import React from 'react';
import "../styles/AddSlot.css";

export function AddSlot() {

    return (
        <div class="container add-slot">
            <div class="row justify-content-center">
                <div class="col-3">
                    <Button label="+ Ajouter un créneau" className="p-button-text btnAddSlot" />
                </div>
                <div class="col-3">
                    <button class='btn'>Enregistrer</button>
                </div>
            </div>
        </div>
    );
}
