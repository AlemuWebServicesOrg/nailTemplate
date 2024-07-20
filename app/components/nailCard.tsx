import React from "react";
import { Nail } from "../utils/Types";

interface NailCardProps {
    data: Nail;
};

const NailCard: React.FC<NailCardProps> = ({ data }) => {

    return (
        <>
            <div id="NailCard" key={data.id}>
                <div id="NailCardImageContainer">
                    <img id="NailCardImage" src={data.image} />
                </div>
                <div id="NailCardCartContainer">Add to cart</div>
                <div id="NailCardTextContainer">
                    <div id="NailCardNameContainer">
                        <p id="NailCardName">{data.name}</p>
                    </div>
                    <div id="NailCardShapeContainer">
                        <p id="NailCardShape">{data.shape}</p>
                    </div>
                    <div id="NailCardPriceContainer">
                        <p id="NailCardPrice">${data.price}</p>
                    </div>
                </div>
            </div>
            <style>
                {`
                    #NailCard { 
                        display: flex;
                        position: relative;
                        width: 250px;
                        height: 320px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin: 10px;
                        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2), 0 3px 3px 2px rgba(0, 0, 0, 0.10);
                        border-radius: 10px;
                    }

                    #NailCardImageContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 60%;
                        justify-content: center;
                        align-items: center;
                    }

                    #NailCardImage {
                        height: 100%;
                    }

                    #NailCardCartContainer {
                        display: flex;
                        position: relative;
                        width: 95%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                        margin: 10px 0;
                        box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    #NailCardTextContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 35%;
                        flex-direction: column;
                        justify-content: space-around;
                        padding-left: 10px;
                    }

                    #NailCardName {
                        font-weight: bold;
                    }

                    #NailCardShape {
                        font-size: 14px;
                    }

                    #NailCardPrice {
                        margin-bottom: 5px;
                        font-style: italic;
                    }
                `}
            </style>
        </>
    );
};

export default NailCard;