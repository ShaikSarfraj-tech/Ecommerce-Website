import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: 'https://img.freepik.com/free-psd/fashion-show-banner-template_23-2148911173.jpg?size=626&ext=jpg&ga=GA1.1.116974452.1727521899&semt=ais_hybrid',
        caption: 'Slide 1'
    },
    {
        url: 'https://img.freepik.com/free-psd/fashion-show-event-horizontal-banner_23-2148911176.jpg?size=626&ext=jpg&ga=GA1.1.116974452.1727521899&semt=ais_hybrid',
        caption: 'Slide 2'
    },
    {
        url: 'https://img.freepik.com/free-psd/horizontal-banner-template-fashion-with-male-model_23-2148821365.jpg?size=626&ext=jpg&ga=GA1.1.116974452.1727521899&semt=ais_hybrid',
        caption: 'Slide 3'
    },
];

const ImageSlider = () => {
    return (
        <div className="slide-container w-full h-screen overflow-hidden">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index} className="w-full h-screen">
                        <div className="flex items-center justify-center bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${slideImage.url})` }}>
                            {/* <span className="p-5 bg-gray-200 text-black">{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSlider;
