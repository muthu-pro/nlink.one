function SoundControl() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(null);

    React.useEffect(() => {
        try {
            audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-deep-space-pulsar-682.mp3');
            audioRef.current.loop = true;
        } catch (error) {
            reportError(error);
        }
    }, []);

    const toggleSound = () => {
        try {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <button
            onClick={toggleSound}
            className="sound-control bg-gray-800 text-white px-4 py-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            data-name="sound-control-button"
        >
            {isPlaying ? 'Mute Sound' : 'Play Sound'}
        </button>
    );
}
