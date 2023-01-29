import React, { useState } from 'react';

export function TimezoneSelect() {
    const fuseauH = ['Paris', 'Londres', 'Sao Paulo', 'Tokyo'];
    const [selectedTimezone, setFuseauHoraire] = useState(fuseauH[0]);

    return (
        <div class="container">
            <div class="row">
                <div class="col-4" style={{paddingLeft: 0}}>
                    <h5>Fuseau Horaire:</h5>
                </div>
                <div class="col-8">
                    <select value={selectedTimezone} onChange={e => setFuseauHoraire(e.target.value)}>
                        {fuseauH.map(timezone => (
                            <option key={timezone} value={timezone}>
                                {timezone}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};


