import React from "react";
import Link from "next/link";
import Header from "../global/header";
import Footer from "../global/footer";

export default function Page() {
    return (
        <div>
            <Header />
            <div id="Customize">
                <div id="CustomizeHeaderCotainer">
                    <h1>Customize your own set</h1>
                </div>
                <div id="CustomizeHeaderTextContainer">
                    <p>Welcome to our customizer where you can design your own unique press-on nails and we'll bring them to life! With our price of just $45.</p>
                </div>
                <div id="CustomizeStepsContainer">
                    <h1 id="CustomizeStepsHeaderContainer">How to create your own Custom Nails:</h1>
                    <div id="CustomizeSteps">
                        <p>1. Design: Use our customizer to create your perfect press-on nails. Choose from a variety of shapes, colors, charms, and more!</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>2. Order: Once you're satisfied with your design, simply place your order. We'll get to work creating your custom nails.</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>3. Delivery: Your personalized press-on nails will be carefully crafted and shipped to your doorstep. Process may take 4-5 weeks.</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>4.Feedback: After receiving your nails, we'll send you a survey email to gather feedback. Your input will help us improve our customizer for an even better experience!</p>
                    </div>
                </div>
                <div id="CustomizeImageGuideContainer">
                    <h1 id="CustomizeImageGuideHeader">Image File Guidelines:</h1>
                    <div id="CustomizeSteps">
                        <p>1. Please use PNG or at least 300 dpi print quality files. 150dpi may result in blurry or pixelated images.</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>2.  Don't place important details very close to the edges. Avoid designs with borders. Borders may appear uneven if the image is shifted.</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>3. Ensure the details in the image are not too small! Remember, these will be printed on nail press-on nails so the image will be smaller than what you see on a screen.</p>
                    </div>
                    <div id="CustomizeSteps">
                        <p>*Please note that this is a custom press-on nail printing service and you will supply the images for your design. We do not create the images or graphics. Please ensure that you have the appropriate authority to use the images you provide. We reserve the right to reject and refund orders that we deem inappropriate (including but not limited to racist, nude, lewd words or imagery).  We may review submitted designs and may communicate with you if we note any images that may contain errors.</p>
                    </div>
                </div>
                <div id="CustomizeButtonContainer">
                    <Link id="CustomizeButton" href="/customize/new">Start customizing!</Link>
                </div>

                <style>
                    {`
                    #Customize {
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

                    #CustomizeHeaderCotainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        padding: 20px 0;
                        margin-bottom: 5vh;
                    }

                    #CustomizeSteps {
                        margin-bottom: 20px;
                    }

                    #CustomizeHeaderTextContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        margin-bottom: 5vh;
                    }

                    #CustomizeStepsContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                    }

                    #CustomizeStepsHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        padding: 20px 0;
                        margin-bottom: 5vh;
                    }

                    #CustomizeImageGuideContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                    }

                    #CustomizeImageGuideHeader {
                        display: flex;
                        position: relative;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        padding: 20px 0;
                        margin-top: 5vh;
                        margin-bottom: 5vh;
                    }

                    #CustomizeButtonContainer {
                        margin-top: 10vh;
                    }

                    #CustomizeButton {
                        font-size: 15px;
                        color: #EBF0F3;
                        background: black;     
                        padding: 5px 25px 5px;
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    #CustomizeButton:hover {
                        background: #28282B;
                    }
                    `}
                </style>
            </div>
            <Footer/>
        </div>
    );
};