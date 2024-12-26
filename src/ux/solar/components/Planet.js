function Planet({ name, orbitRadius, period, size }) {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        try {
            const updatePosition = () => {
                const now = new Date().getTime();
                const angle = (now / (period * 1000)) * 2 * Math.PI;
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                setPosition({ x, y });
            };

            const interval = setInterval(updatePosition, 16);
            return () => clearInterval(interval);
        } catch (error) {
            reportError(error);
        }
    }, [orbitRadius, period]);

    return (
        <div data-name="planet-container">
            <div
                className="orbit"
                style={{
                    width: orbitRadius * 2,
                    height: orbitRadius * 2,
                }}
                data-name="planet-orbit"
            />
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                data-name={`planet-group-${name.toLowerCase()}`}
            >
                <div
                    className={`planet ${name.toLowerCase()}`}
                    data-name={`planet-${name.toLowerCase()}`}
                />
                <div 
                    className="planet-label"
                    data-name={`planet-label-${name.toLowerCase()}`}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}
