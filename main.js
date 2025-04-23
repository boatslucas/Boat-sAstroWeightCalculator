const planets = [
        { name: 'The Sun', multiplier: 27.9 },
        { name: 'Mercury', multiplier: 0.377 },
        { name: 'Venus', multiplier: 0.9032 },
        { name: 'Earth', multiplier: 1 },
        { name: 'Mars', multiplier: 0.3895 },
        { name: 'Jupiter', multiplier: 2.64 },
        { name: 'Saturn', multiplier: 1.139 },
        { name: 'Uranus', multiplier: 0.917 },
        { name: 'Neptune', multiplier: 1.148 },
        { name: 'Pluto', multiplier: 0.06 }
    ];
    function populatePlanetSelect() {
        const planetSelect = document.getElementById('planets');
        planets.forEach(planet => {
            const option = document.createElement('option');
            option.value = planet.name;
            option.textContent = planet.name;
            planetSelect.appendChild(option);
        });
    }
    function getSelectedPlanet(selectedPlanetName) {
        const planet = planets.find(p => p.name === selectedPlanetName);
        if (!planet) {
            throw new Error(`Planet ${selectedPlanetName} not found`);
        }
        return planet;
    }
    function calculateWeight() {
    const userWeight = Number(document.getElementById('user-weight').value);
    const selectedPlanetName = document.getElementById('planets').value;
    const resultContainer = document.getElementById('result');
    if (isNaN(userWeight) || userWeight <= 0) {
        resultContainer.innerHTML = "Please enter a valid number!";
        return;
    }
    if (!selectedPlanetName) {
        resultContainer.innerHTML = "Please select a planet!";
        return;
    }
    const planet = getSelectedPlanet(selectedPlanetName);
    const calculatedWeight = userWeight * planet.multiplier;
    resultContainer.textContent = `Your weight on ${planet.name} is ${calculatedWeight.toFixed(2)} pounds!`;
    }
    window.onload = function() {
        populatePlanetSelect();
        document.getElementById('calculate-button').addEventListener('click', calculateWeight);
        const music = document.getElementById('background-music');
        const playButton = document.getElementById('play-music');
        const pauseButton = document.getElementById('pause-music');
        playButton.addEventListener('click', () => {
            music.play();
        });
        pauseButton.addEventListener('click', () => {
            music.pause();
        });
    };









