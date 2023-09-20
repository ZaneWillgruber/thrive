export default function HeroImage() {

    return (
        <div className="hero w-3/6">
            <video
                autoPlay
                muted
                playsInline
                poster="../images/thrive_logo.webp" // Add a poster image for mobile devices
            >
                <source src="../videos/thrive_transparent.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <h1>Live Your Best Life</h1>
        </div>
    );
}