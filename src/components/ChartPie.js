import {Paper} from '@material-ui/core';
import React from 'react';


const options = {
    scales: false,
    plugins: {
        legend: {
            position: 'bottom',
            align:'center',
            labels: {
                borderRadius:15,
                usePointStyle: true,
            },
        },
    }
};

let data = {
    labels: ['Positive', 'Neutral', 'Negative', 'Undefined'],
    datasets: [
        {
            label: 'sequenced',
            data: [15, 10, 8, 20],
            borderRadius: 15,
            backgroundColor: ['#37A1E8', '#FE6383', '#868686', '#FC0'],
        },
    ],
};
const ChartPie = () => {
    return (
        <div style={{width:'60%',margin:'auto'}} >
                 <div> this is</div>
                 <div> this is a pie chart for example</div>
                 <div> this is a pie chart for example</div>
        </div>
    );
};
export default ChartPie;
