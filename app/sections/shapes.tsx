import React from "react";
import { ShapesData } from "../data/shapesData";
import { Shape } from "../utils/Types";
import ShapeCard from "../components/shapeCard";

const Shapes = () => {
    return (
        <div id="Shapes">
            <div id="ShapesCardsContainer">
                {ShapesData.map((data: Shape) => (
                    <ShapeCard data={data} />
                ))}
            </div>

            <style>
                {`
                #Shapes {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100%;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 5vh 0;
                }
                
                #ShapesCardsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    justify-content: space-around;
                    align-items: space-around;
                    flex-wrap: wrap;
                    overflow: hidden;
                }
                `}
            </style>
        </div>
    );
};

export default Shapes;