import React from "react";
import Picture from "../../../assets/images/profile_picture.svg";
import Picture3 from "../../../assets/images/profile_picture3.svg";

function CompletedJob(props) {
    return (
        <div className="w-80 h-min border-none shadow-lg mx-3">
            <div className="flex flex-row justify-between mt-2 px-3 py-2">
                <div className="bg-backgroundGreen w-max h-max rounded-full text-green text-base">
                    <p className="text-center">Completed</p>
                </div>
            </div>
            <div className="flex flex-row justify-between px-3 py-2">
                {/* Customer */}
                <div className="flex flex-col">
                    <p className="text-base">Customer</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture} alt="profile" />
                        <p className="text-gray text-sm">Janice Hutchinson</p>
                    </div>
                </div>
                {/* Tradesperson */}
                <div className="flex flex-col">
                    <p className="text-base">Tradesperson</p>
                    <div className="flex flex-row gap-2">
                        <img className="w-5" src={Picture3} alt="profile" />
                        <p className="text-gray text-sm">John Dalley, Painter</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Address</p>
                    <p className="text-gray text-sm">763 S. Corona St. Beaumont, AB T4X 3H5</p>
                </div>
            </div>

            <div className="flex flex-row justify-between px-3 py-2">
                {/* Description */}
                <div className="flex flex-col">
                    <p className="text-base">Description</p>
                    <p className="text-gray text-sm">Paint my kitchen blue</p>
                </div>
                {/* Booking code */}
                <div className="flex flex-col">
                    <p className="text-base">Booking code</p>
                    <p className="text-gray text-sm">HA78920Y</p>
                </div>
            </div>

            {/* Date Completed */}
            <div className="flex flex-row justify-between px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-base">Date completed</p>
                    <p className="text-gray text-sm">May 20.2022</p>
                </div>
            </div>
        </div>
    )
}

export default CompletedJob;