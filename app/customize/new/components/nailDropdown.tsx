import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface NailDropdownProps {
    id: number;
    index: number;
    title: string;
    options?: any;
    polar: boolean;
    sizeOptions?: string[];
    sendClicked: (id: number) => void;
    sendData: (data: string) => void;
};

const NailDropdown: React.FC<NailDropdownProps> = ({ id, index, title, options, polar, sendClicked, sendData }) => {
    return (
        <>
            <div id="NailDropdown" onClick={() => sendClicked(Number(id))}>
                <div id="NailDropdownTitleContainer">
                    <p id="NailDropdownTitle">{title}<IoIosArrowDown style={{ "transform": index === id ? "rotate(180deg)" : "rotate(0deg)" }} /></p>
                    <div id="NailDropdownOptionsContainer" style={{ "display": index === id ? "flex" : "none" }}>
                        {polar === true ? (
                            <>
                                <div id="PolarOptions">
                                    <label htmlFor="NailDropdownYesOption">Yes</label>
                                    <input id="NailDropdownYesOption" type="radio" />
                                    <label htmlFor="NailDropdownNoOption">No</label>
                                    <input id="NailDropdownNoOption" type="radio" />
                                </div>
                            </>
                        ) : (
                            <>
                                {title === "Shape & Length" && (
                                    <div id="ShapeAndLength">
                                        <div id="NailDropdownShapeContainer">
                                            {options.map((name: string) => (
                                                <div id="NailDropdownShapeOption">
                                                    <img id="NailDropdownShapeImages" src={`/customize/icons/${name}.png`} />
                                                    <p>{name}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div id="NailDropdownLengthContainer">
                                            <label htmlFor="NailDropdownLengthShortOption">Short</label>
                                            <input id="NailDropdownLengthShortOption" type="radio" />
                                            <label htmlFor="NailDropdownLengthMediumOption">Medium</label>
                                            <input id="NailDropdownLengthMediumOption" type="radio" />
                                            <label htmlFor="NailDropdownLengthLargeOption">Large</label>
                                            <input id="NailDropdownLengthLargeOption" type="radio" />
                                        </div>
                                    </div>
                                )}

                                {title === "Base Color" && (
                                    <div id="BaseColor">
                                        <div id="NailDropdownBaseColorTypeContainer">
                                            <label htmlFor="NailDropdownBaseColorSolidOption">Solid</label>
                                            <input id="NailDropdownBaseColorSolidOption" type="radio" />
                                            <label htmlFor="NailDropdownBaseColorGlitterOption">Glitter</label>
                                            <input id="NailDropdownBaseColorGlitterOption" type="radio" />
                                        </div>
                                        <div id="NailDropdownBaseColorContainer">
                                            {options.map((name: string) => (
                                                <div id="NailDropdownBaseColorOption">
                                                    <div id="NailDropdownBaseColor" style={{ "backgroundColor": `${name}` }} />
                                                    <p>{name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {title === "Size" && (
                                    <div id="Size">
                                        <div id="NailDropdownSizeContainer">
                                            <label htmlFor="NailDropdownSizeXSmallOption">XSmall</label>
                                            <input id="NailDropdownSizeXSmallOption" type="radio" />
                                            <label htmlFor="NailDropdownSizeSmallOption">Small</label>
                                            <input id="NailDropdownSizeSmallOption" type="radio" />
                                            <label htmlFor="NailDropdownSizeMediumOption">Medium</label>
                                            <input id="NailDropdownSizeMediumOption" type="radio" />
                                            <label htmlFor="NailDropdownSizeLargeOption">Large</label>
                                            <input id="NailDropdownSizeLargeOption" type="radio" />
                                        </div>
                                    </div>
                                )}
                            </>
                        )} 
                    </div>
                </div>

                <style>
                    {`
                    #NailDropdown {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding: 29px;
                        border-top: 3px solid white;
                    }

                    #NailDropdownTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        flex-direction: column;
                        cursor: pointer;
                    }

                    #NailDropdownTitle {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: space-between;
                    }

                    #NailDropdownOptionsContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 60%;
                        flex-direction: column;
                    }

                    #PolarOptions {
                        display: flex;
                        position: relative;
                        align-items: center;
                        margin-top: 20px;
                    }
                  
                    #PolarOptions label {
                        margin-right: 10px;
                        margin-left: 10px;
                    }

                    #ShapeAndLength {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    #NailDropdownShapeContainer {
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        margin-right: 10px;
                    }

                    #NailDropdownShapeOption {
                        display: flex;
                        position: relative;
                        align-items: center;
                        flex-direction: column;
                        margin: 10px 30px 0 20px;
                    }

                    #NailDropdownShapeImages {
                        display: flex;
                        position: relative;
                        height: 50px;
                        width: 30px;
                        border: 1px solid white;
                        border-radius: 12px;
                    }

                    #NailDropdownShapeImages:hover {
                        border: 1px solid black;
                    }

                    #NailDropdownLengthContainer {
                        display: flex;
                        position: relative;
                    }

                    #NailDropdownLengthShortOption {
                        display: flex;
                        margin: 0 40px 0 10px;
                    }

                    #NailDropdownLengthMediumOption {
                        display: flex;
                        margin: 0 40px 0 10px;
                    }

                    #BaseColor {
                        display: flex;
                        height: 100%;
                        min-height: 100%;
                        align-items: center;
                        flex-direction: column;
                    }

                    #NailDropdownBaseColorTypeContainer {
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        margin-bottom: 5px;
                        gap: 15px;
                    }

                    #NailDropdownBaseColorContainer {
                        display: flex;
                        height: 100%;
                        padding: 20px;
                        min-height: 100%;
                        align-items: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 15px;
                    }
                    
                    #NailDropdownBaseColorOption {
                        display: flex;
                        position: relative;
                        align-items: center;
                        flex-direction: column;
                    }

                    #NailDropdownBaseColor {
                        padding: 15px;
                        border-radius: 50%;
                        border: 1px solid transparent;
                    }

                    #NailDropdownBaseColor:hover {
                        border: 1px solid black;
                    }

                    #Size {
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                    }

                    #NailDropdownSizeContainer {
                        display: flex;
                        position: relative;
                        align-items: center;
                        margin-top: 20px;
                    }

                    #NailDropdownSizeContainer label {
                        margin-right: 10px;
                        margin-left: 10px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                    }
                    
                    @media (max-width: 700px) {
                        #NailDropdownShapeOption {

                        }
                    }
                    `}
                </style>
            </div>
        </>
    );
};

export default NailDropdown;