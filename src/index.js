import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class VinSavor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wine-app"></div>
        );
    }
}


ReactDOM.render(<VinSavor nobleGrapes={NobleGrapeDefinitions} />, document.getElementById("root"));

function NobleGrapeDefinitions() {
    return [
        {id: 'rs', name: 'Riesling', acid: 'High', body: 'Light', tannen: 'None', fingerprint: ['Petrol']},
        {id: 'sb', name: 'Sauvignon Blanc', acid: 'High', body: 'Light', tannen: 'None', fingerprint: ['Grass']},
        {id: 'ch', name: 'Chardonnay', acid: 'Medium', body: 'Medium', tannen: 'None', fingerprint: ['None']},
        {id: 'pn', name: 'Pinot Noir', acid: 'High', body: 'Light', tannen: 'Low', fingerprint: ['Rose', 'Barnyard']},
        {id: 'sa', name: 'Sangiovese', acid: 'High', body: 'Light', tannen: 'Low', fingerprint: ['Leather']},
        {id: 'gr', name: 'Grenache', acid: 'Low', body: 'Full', tannen: 'High', fingerprint: ['Garrigue', 'Lavender', 'Thyme']},
        {id: 'sy', name: 'Syrah', acid: 'Medium', body: 'Full', tannen: 'High', fingerprint: ['Game']},
        {id: 'cs', name: 'Cabernet Sauvignon', acid: 'Medium', body: 'Full', tannen: 'High', fingerprint: ['Pencil', 'Cedar']},
        {id: 'me', name: 'Merlot', acid: 'Medium', body: 'Full', tannen: 'High', fingerprint: ['Pencil', 'Cedar']}
    ];
}
