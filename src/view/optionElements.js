import React from 'react';

function optionElements(options) {
    let resultList = [];
    
    options.forEach(([key, value]) => {
        resultList.push(<option key={key} value={key}>{value}</option>);
    });

    return resultList;
}

export default optionElements;