import React, {useEffect, useState} from 'react';
import {House, SquarePlus, CircleUser} from 'lucide-react';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Layout from "../pages/Layout.jsx";

const SurvivalHabitTracker = () => {
    const [hp, setHp] = useState(100);
    const [water, setWater] = useState(100);

    // For setting data
    useEffect(() => {
        const characterParams = JSON.parse(localStorage.getItem('characterParams'));
        setHp(characterParams.hp);
        setWater(characterParams.water);
    }, []);


    return (
        <Layout pageTitle="Hello Daniel">
            <div className="flex justify-center mb-6">
                <div className="bg-white rounded-full p-4 relative">
                    <img
                        src="./src/assets/avatar.png"
                        alt="Pixel Character"
                        className="w-32 h-32"
                        style={{objectFit: 'cover'}}
                    />

                </div>
            </div>

            {/* Status Bars */}
            <div className="flex justify-center space-x-4 mb-6">
                {/* HP Bar */}
                <div className="w-40 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-red-400 h-full"
                        style={{width: `${hp}%`}}
                    ></div>
                    <div className="text-center text-xs">
                        {hp}/100 hp
                    </div>
                </div>

                {/* Water Bar */}
                <div className="w-40 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-blue-400 h-full"
                        style={{width: `${water}%`}}
                    ></div>
                    <div className="text-center text-xs">
                        {water}/100 water
                    </div>
                </div>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-2 gap-4 px-4">
                {/* Chips */}
                <div className="bg-[#808060] rounded-lg p-4">
                    <div className="text-center text-white mb-2">Chips</div>
                    <div className="flex justify-center">
                        <button className="bg-[#606040] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            -
                        </button>
                    </div>
                </div>

                {/* Apple */}
                <div className="bg-[#808060] rounded-lg p-4">
                    <div className="text-center text-white mb-2">Apple</div>
                    <div className="flex justify-center">
                        <button className="bg-[#606040] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            +
                        </button>
                    </div>
                </div>

                {/* Empty Rows */}
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#808060] rounded-lg h-20"
                    ></div>
                ))}
            </div>
        </Layout>
    );
};

export default SurvivalHabitTracker;