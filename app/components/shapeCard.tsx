import React from "react";
import { Shape } from "../utils/Types";

interface ShapeCardProps {
    data: Shape;
};

const ShapeCard: React.FC<ShapeCardProps> = ({ data }) => {

    return (
        <>
            <div id="ShapesCard" key={data.id}>
                <div id="ShapesCardImageContainer">
                    <img id="ShapesCardImage" src={data.image} />
                </div>
                <div id="ShapesCardShopAllContainer">{data.title}</div>
            </div>
            
            <style>
                {`
                #ShapesCard {
                    display: flex;
                    position: relative;
                    width: 250px;
                    height: 320px;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin: 10px;
                    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2), 0 3px 3px 2px rgba(0, 0, 0, 0.10);
                    border-radius: 10px;
                }

                #ShapesCardImageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 60%;
                    justify-content: center;
                    align-items: center;
                }

                #ShapesCardImage {
                    height: 100%;
                }

                #ShapesCardShopAllContainer {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    border-radius: 10px;
                    cursor: pointer;
                }
                `}
            </style>
        </>
    );
};

export default ShapeCard;