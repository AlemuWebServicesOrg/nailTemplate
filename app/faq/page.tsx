"use client"
import React, { useState }  from "react";
import FaqCard from "./components/faqCard";
import { Faq } from "../utils/Types";
import { FaqData } from "../data/faqData";
import Header from "../global/header";
import Footer from "../global/footer";

export default function Page() {

    const [currentCard, setCurrentCard] = useState<number>();

    const handleCurrentCard = (id: number) => {
        if (id === currentCard) {
            setCurrentCard(undefined);
        } else {
            setCurrentCard(id);
        };
    };

    return (
        <>
        <Header />
            <div id="FAQ">
                <div id="FAQHeaderContainer">
                    <h1>FAQ</h1>
                </div>
                <div id="FAQCardsContainer">
                    {FaqData.map((data: Faq, index: number) => (
                        <FaqCard data={data} index={Number(currentCard)} sendClicked={(id: number) => handleCurrentCard(id)} />
                    ))}
                </div>

                <style>
                    {`
                    #FAQ {
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

                    #FAQHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        padding: 20px 0;
                    }

                    #FAQCardsContainer {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 100%;
                        flex-direction: column;
                    }
                    `}
                </style>
            </div>
            <Footer />
        </>
    );
};