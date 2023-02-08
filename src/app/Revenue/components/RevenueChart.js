import React from "react";
import { XYPlot, XAxis, YAxis, AreaSeries } from 'react-vis';

function RevenueChart () {
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
                <h3 className="text-xl">Revenue Metrics</h3>
                <div className="flex gap-5 mr-2">
                    <div className="w-16 h-5 bg-pink"></div><p>Gross revenue</p>
                    <div className="w-16 h-5 bg-lightPink"></div><p>Net revenue</p>
                </div>
            </div>

            {/* Chart */}
            <div className="w-3/4 ml-10 mt-5">
                <XYPlot height={500} width={1000}
                colorRange={['#CE1449']}
                >
                    <XAxis />
                    <YAxis />
                    <AreaSeries curve="curveNatural" color="#FFECF1" data={coordinates} stroke="#CE1449"/>
                </XYPlot>
            </div>

            {/* Stats */}
            <div className="flex flex-row justify-around items-center mt-8 gap-10">
                <div className="flex flex-col">
                    <p className="text-2xl">$1.51M</p>
                    <p className="text-base">Monthly revenue</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-2xl">$3.51M</p>
                    <p className="text-base">Quarterly revenue</p>
                </div>
                
                <div className="flex flex-col">
                    <p className="text-2xl">$8.51M</p>
                    <p className="text-base">Annual revenue</p>
                </div>
            </div>
        </div>
    )
}

export default RevenueChart;