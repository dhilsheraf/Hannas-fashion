import React from 'react';
import img from '../../assets/pexels-elina-sazonova-1914984.jpg'

const Banner = () => {
    return (
        <div className="w-full bg-black">
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
                style={{
                    backgroundImage:
                        `url(${img})`,
                }}
            >
                <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to HANNAS</h1>
                <p className="text-xl mb-6 drop-shadow-md">Elevate Your Everyday Look</p>
                <button
                    className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-200 transition"
                    aria-label="Shop now"
                >

                    <a
                        href="https://maps.app.goo.gl/zyagK1fXhFqvw91v5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-200 transition inline-block"
                    >
                        Reach Shop now
                    </a>

                </button>
            </section>
        </div>
    );
};

export default Banner;
