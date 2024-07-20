import React from "react";

interface PreviewSectionProps {
    fileName: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ fileName }) => {

    return (
        <>
            <div>
                <img id="PreviewSectionImages" src={`/customize/preview/${fileName}`} />
            </div>

            <style>
                {`
                #PreviewSectionImages {
                    display: flex;
                    position: relative;
                    width: 100%;
                }
                `}
            </style>
        </>
    );
};

export default PreviewSection;