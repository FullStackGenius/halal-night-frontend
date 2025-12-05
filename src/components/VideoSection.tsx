import { useRef, useState } from "react";

export default function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showPlayBtn, setShowPlayBtn] = useState(true);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowPlayBtn(false);
        }
    };

    const handleStop = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            videoRef.current.load(); // 🔥 show poster again
        }
        setShowPlayBtn(true);
    };

    const handleEnded = () => {
        handleStop(); // 🔥 same action when video ends
    };

    return (
        <section className="bg-[#BD8928] max-w-full w-full">
            <div className="w-full max-w-[1635px] relative">

                <video
                    ref={videoRef}
                    className="w-full relative cursor-pointer"
                    poster="/images/video-img.png"
                    onEnded={handleEnded}
                    onClick={handleStop}    // 🔥 click video → stop + poster
                >
                    <source src="/videos/your-video.mp4" type="video/mp4" />
                </video>

                {showPlayBtn && (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center waves"
                    >
                        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#BD8928]" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.5 3.5v9l7-4.5-7-4.5z" />
                            </svg>
                        </div>
                    </button>
                )}

            </div>
        </section>
    );
}
