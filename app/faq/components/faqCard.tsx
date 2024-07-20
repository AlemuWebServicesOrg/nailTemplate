import React from "react";
import { Faq } from "../../utils/Types";
import { IoIosArrowDown } from "react-icons/io";

interface FaqCardProps {
    data: Faq;
    index: number;
    sendClicked: (id: number) => void;
};

const FaqCard: React.FC<FaqCardProps> = ({ data, index, sendClicked }) => {
    return (
        <div id="FaqCard" key={data.id} onClick={() => sendClicked(Number(data.id))}>
            <div id="FaqCardQuestionContainer">
                <p>{data.question} <IoIosArrowDown style={{ "transform": index === data.id ? "rotate(180deg)" : "rotate(0deg)" }} /></p>
                <div id="FaqCardAnswerContainer" style={{ "display": index === data.id ? "flex" : "none" }}>
                    <p>{data.answer}</p>
                </div>
            </div>

            <style>
                {`
                #FaqCard {
                    display: flex;
                    position: relative;
                    width: 100%;
                    margin: 20px 0;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #ccc;
                }

                #FaqCardQuestionContainer {
                    color: black;
                    font-weight: bold;
                }

                #FaqCardAnswerContainer {
                    display: flex;
                    margin-top: 15px;
                    font-weight: 400;
                    color: black;
                }
                `}
            </style>
        </div>
    );
};

export default FaqCard;