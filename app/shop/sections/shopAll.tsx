import React from "react";
import { AllNailsData } from "../../data/allNailsData";
import { Nail } from "../../utils/Types";
import NailCard from "../../components/nailCard";

const ShopAll = () => {
    return (
        <div id="ShopAll">
            <div id="ShopAllHeaderContainer">
                <h1 id="ShopAllHeader">All Nails</h1>
            </div>
            <div id="ShopAllCardsContainer">
                {AllNailsData.map((data: Nail) => (
                    <NailCard data={data} />
                ))}
            </div>

            <style>
                {`
                #ShopAll {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15vh;
                    margin-bottom: 15vh;
                }

                #ShopAllHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 0;
                }
                
                #ShopAllCardsContainer {
                    display: grid;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 50px;
                    overflow: hidden;
                }
                `}
            </style>
        </div>
    );
};

export default ShopAll;