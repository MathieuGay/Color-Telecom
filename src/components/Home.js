import React from 'react';
import { AddSlot } from './AddSlot';
import { Days } from './Days';
import { HoraireSelector } from './HoraireSelector';
import { TimezoneSelect } from './TimezoneSelect';


export function Home() {

    return (
        <div class="container">
            <div class="row">
                <div class="col"><h5>Horaire d'ouverture</h5></div>
                <div class="col"><TimezoneSelect /></div>
            </div>
            <div class="container white-container">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col"><Days /></div>
                            <div class="col"><HoraireSelector /></div>
                        </div>
                    </div>
                </div>
            </div>
            <AddSlot />
        </div>
    );
}