"use client"
import React, { useState } from "react";
import NailDropdown from "./components/nailDropdown";
import Header from "../../global/header";
import PreviewSection from "./sections/preview";
import Footer from "../../global/footer";
import { Preview } from "../../utils/types";

export default function Page() {

    const [currentIndex, setCurrentIndex] = useState<number>();
    const [previewData, setPreviewData] = useState<Preview>({
        "shape": "Almond",
        "length": "Short",
        "color": "White",
        "colorType": "Solid",
    });
    const [fileName, setFileName]  = useState<string>("shape-{Almond}-length-{Short}-color-{White}-color-type-{Solid}.webp");

    const handleCurrentIndex = (id: number) => {
        if (id === currentIndex) {
            setCurrentIndex(undefined);
        } else {
            setCurrentIndex(id);
        }
    };

    const handleSendDataToPreview = (key: string, data: string) => {
        setPreviewData({ ...previewData, [key]: data });
        setFileName(`shape-{${previewData["shape"]}}-length-{${previewData["length"]}}-color-{${previewData["color"]}}-color-type-{${previewData["colorType"]}}.webp`);
    };

    return (
        <div>
            <Header/>
            <div id="New">
                <div id="NewCustomizeContainer">
                    <div id="NewModelContainer">
                        <div id="Preview">
                            <PreviewSection fileName={fileName} />
                        </div>
                    </div>
                    <div id="NewCustomizeOptionsContainer">
                        <div id="NewHeaderContainer">
                            <h1 id="NewHeader">Design your own Press-On Nails</h1>
                            <p id="NewHeaderPrice">$45</p>
                        </div>
                        <div id="NewNailDropdownContainer">
                            <div id="NewShapeContainer">
                                <NailDropdown 
                                    id={1}
                                    index={Number(currentIndex)}
                                    title="Shape & Length"
                                    options={["Square", "Almond", "Coffin", "Stiletto"]}
                                    polar={false}
                                    sizeOptions={["Short", "Medium"]}
                                    sendClicked={handleCurrentIndex}
                                    sendData={handleSendDataToPreview}
                                />
                            </div>
                            <div id="NewColorContainer">
                                <NailDropdown 
                                    id={2}
                                    index={Number(currentIndex)}
                                    title="Base Color"
                                    options={["White", "Pink", "Salmon", "Red", "Azure", "Blue", "Violet", "Purple", "Yellow", "Grey", "Green", "Black"]}
                                    polar={false}
                                    sendClicked={handleCurrentIndex}
                                    sendData={handleSendDataToPreview}
                                />
                            </div>
                            <div id="NewImagesContainer">
                                <NailDropdown 
                                    id={3}
                                    index={Number(currentIndex)}
                                    title="Add Custom Images?"
                                    polar={true}
                                    sendClicked={handleCurrentIndex}
                                    sendData={handleSendDataToPreview}
                                />
                            </div>
                            <div id="NewCharmsContainer">
                                <NailDropdown 
                                    id={4}
                                    index={Number(currentIndex)}
                                    title="Add Charms?"
                                    polar={true}
                                    sendClicked={handleCurrentIndex}
                                    sendData={handleSendDataToPreview}
                                />
                            </div>
                            <div id="NewSizeConatiner">
                                <NailDropdown 
                                    id={5}
                                    index={Number(currentIndex)}
                                    title="Size"
                                    options={["X-small", "Small", "Medium", "Large"]}
                                    polar={false}
                                    sendClicked={handleCurrentIndex}
                                    sendData={handleSendDataToPreview}
                                />
                            </div>
                        </div>
                        <div id="NewCartContainer">
                            <div id="NewCartButton">Add to cart</div>
                        </div>
                    </div>
                </div>
                
                <style>
                    {`
                    #New {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100vw;
                        height: 100%;
                        margin-top: 5vh;
                        margin-bottom: 5vh;
                        padding: 120px 0;
                        border-radius: 10px;
                    }

                    #NewHeaderContainer {                        
                        display: flex;
                        position: relative;
                        width: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: #f8f7f7;
                    }

                    #NewHeader {
                        margin-top: 2vh;
                        margin-bottom: 2vh;
                        font-size: 25px;
                    }

                    #NewHeaderPrice {
                        margin-bottom: 2vh;
                    }

                    #NewNailDropdownContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        background-color: #f8f7f7;
                        overflow-y: scroll;
                    }

                    #NewCustomizeContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }

                    #NewModelContainer {
                        display: flex;
                        position: relative;
                        width: 70%;
                        height: 70vh;
                    }

                    #NewCustomizeOptionsContainer {
                        display: flex;
                        position: relative;
                        width: 30%;
                        height: 70vh;
                        flex-direction: column;
                        align-items: center;
                    }

                    #NewShapeContainer, #NewColorContainer, #NewImagesContainer, #NewCharmsContainer, #NewSizeConatiner, #NewCartContainer {
                        width: 100%;
                        
                    }

                    #NewCartButton {
                        display: flex;
                        position: relative;
                        height: 60px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 17px;
                        color: #EBF0F3;
                        background: black;
                        cursor: pointer;
                    }

                    #NewCartButton:hover {
                        background: #28282B;
                    }
                    `}
                </style>
            </div>
            <Footer/>
        </div>
    );
};