import React from "react";
import { XYPlot, XAxis, YAxis, AreaSeries } from 'react-vis';

function MarketingChart () {
    const coordinates = [
        {x: 0, y: 0}, 
        {x: 5, y: 5}, 
        {x: 7, y: 20}, 
        {x: 10, y: 15}, 
        {x: 15, y: 30}, 
        {x: 20, y: 15}
    ];

    return(
        <div>
            {/* Heading */}
            <div className="flex flex-row justify-between items-center ml-10 mt-5">
                <h3 className="text-xl">Marketing Metrics</h3>
            </div>

            {/* Chart */}
            <div className="w-3/4 ml-10 mt-5">
                <XYPlot height={500} width={1000}
                colorRange={['#BFB92B']}
                >
                    <XAxis />
                    <YAxis />
                    <AreaSeries curve="curveNatural" color="#FCFFEC" data={coordinates} stroke="#BFB92B"/>
                </XYPlot>
            </div>

             {/* Stats */}
             <div className="flex flex-row justify-around items-center mt-8 gap-10">
                <div className="flex flex-col">
                    <p className="text-2xl">28,699</p>
                    <p className="text-base">Website visits</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-2xl">29,099</p>
                    <p className="text-base">Sign ups</p>
                </div>
                
                <div className="flex flex-col">
                    <p className="text-2xl">45,756</p>
                    <p className="text-base">Service requests</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-2xl">28,699</p>
                    <p className="text-base">Bookings confirmed</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-2xl">28,699</p>
                    <p className="text-base">Jobs completed</p>
                </div>
            </div>
        </div>
    )
}

export default MarketingChart;