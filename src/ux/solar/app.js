function App() {
    return (
        <div className="solar-system" data-name="solar-system">
            <div className="sun" data-name="sun" />
            {planetData.map((planet) => (
                <Planet
                    key={planet.name}
                    name={planet.name}
                    orbitRadius={planet.orbitRadius}
                    period={planet.period}
                    size={planet.size}
                />
            ))}
            <SoundControl />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
