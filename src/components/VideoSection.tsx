import { useRef, useState } from "react";

export default function VideoSection() {
    const popupVideoRef = useRef<HTMLVideoElement>(null);
    // const [showPlayBtn, setShowPlayBtn] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    // const handlePlay = () => {
    //     setShowPopup(true);
    //     setShowPlayBtn(false);

    //     // autoplay after modal renders
    //     setTimeout(() => {
    //         if (popupVideoRef.current) {
    //             popupVideoRef.current.currentTime = 0;
    //             popupVideoRef.current.play();
    //         }
    //     }, 200);
    // };

    const closePopup = () => {
        if (popupVideoRef.current) {
            popupVideoRef.current.pause();
            popupVideoRef.current.currentTime = 0;
        }
        setShowPopup(false);
        // setShowPlayBtn(true);
    };

    return (
        <section className="bg-[#BD8928] max-w-full w-full">
            <div className="w-[80%] relative">

                {/* Thumbnail video (not playing) */}
                <img
                    src="/images/video-img.png"
                    className="w-full relative  h-[300px] md:h-[450px] lg:h-[600px] object-cover"
                    alt="thumbnail"
                />

                {/* {showPlayBtn && (
                    <button
                        onClick={handlePlay}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 waves cursor-pointer"
                    >
                        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#BD8928]" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.5 3.5v9l7-4.5-7-4.5z" />
                            </svg>
                        </div>
                    </button>
                )} */}

            </div>

            {/* 🔥 Popup Modal Video */}
            {/* Popup Modal */}
            {showPopup && (
                <div
                    className="
            fixed inset-0 bg-black/40 backdrop-blur-sm
            flex items-center justify-center z-[999]
            opacity-0 animate-fadeIn
        "
                >

                    {/* Close Button Outside */}
                    <button
                        onClick={closePopup}
                        className="absolute top-6 right-6 text-white text-4xl font-bold z-[1000]"
                    >
                        ×
                    </button>

                    {/* Video container with smooth zoom */}
                    <div
                        className="
                relative w-[90%] max-w-4xl rounded-lg overflow-hidden shadow-xl bg-black
                scale-95 animate-zoomIn
            "
                    >
                        <video
                            ref={popupVideoRef}
                            className="w-full h-auto"
                            controls
                        >
                            <source src="/videos/your-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}


        </section>
    );
}
