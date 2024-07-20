import React from "react";
import { BestSellersData } from "../data/bestSellersData";
import { Nail } from "../utils/Types";
import NailCard from "../components/nailCard";

const BestSellers = () => {

    return (
        <div id="BestSellers">
            <div id="BestSellersHeaderContainer">
                <h1 id="BestSellersHeader">Best Sellers</h1>
            </div>
            <div id="BestSellersCardsContainer">
                {BestSellersData.map((data: Nail) => (
                    <NailCard data={data} />
                ))}
            </div>
            <div id="BestSellersShopAllButtonContainer">
                <button id="BestSellersShopAllButton">Shop all nails</button>
            </div>

            <style>
                {`
                #BestSellers {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 5vh 0;
                }

                #BestSellersHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 0;
                }

                #BestSellersCardsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    justify-content: space-around;
                    align-items: space-around;
                    flex-wrap: wrap;
                    overflow: hidden;
                }

                #BestSellersShopAllButtonContainer {
                    padding: 50px 0;
                }
                
                #BestSellersShopAllButton {
                    font-size: 15px;
                    color: #EBF0F3;
                    background: black;     
                    padding: 5px 25px 5px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                
                #BestSellersShopAllButton:hover {
                    background: #28282B;
                }
                `}
            </style>
        </div>
    );
};

export default BestSellers;