import React, { useState, useEffect } from 'react';
import './GameComparisonPage.css';
import './Navbar_Footer.css';

function GameComparisonPage() {
  const [game1Title, setGame1Title] = useState('');
  const [game2Title, setGame2Title] = useState('');
  const [availableGames, setAvailableGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAvailableGames(data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch games:', error);
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleCompare = () => {
    if (!game1Title.trim() || !game2Title.trim()) {
      alert('Please enter titles for both games.');
      return;
    }

    if (game1Title.toLowerCase() === game2Title.toLowerCase()) {
      alert('Please select two different games to compare.');
      return;
    }

    const selectedGame1 = availableGames.find(
      (game) => game.title.toLowerCase() === game1Title.toLowerCase()
    );
    const selectedGame2 = availableGames.find(
      (game) => game.title.toLowerCase() === game2Title.toLowerCase()
    );

    if (selectedGame1 && selectedGame2) {
      setSelectedGames([selectedGame1, selectedGame2]);
      setShowComparison(true);
    } else {
      alert('One or both game titles are invalid. Please select from the available games.');
      setShowComparison(false);
      setSelectedGames([]);
    }
  };

  const handleClear = () => {
    setGame1Title('');
    setGame2Title('');
    setSelectedGames([]);
    setShowComparison(false);
  };

  const determineWinner = () => {
    if (selectedGames.length < 2) return null;

    const rating1 = selectedGames[0].rating;
    const rating2 = selectedGames[1].rating;

    if (rating1 > rating2) return selectedGames[0].title;
    if (rating2 > rating1) return selectedGames[1].title;
    return `It's a tie!`;
  };

  if (loading) {
    return <div className="loading">Loading games for comparison...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="gamecomparison-container">
      <h1 className="comparison-title">Compare Games</h1>

      <div className="game-inputs">
        <input
          type="text"
          placeholder="Enter first game title..."
          value={game1Title}
          onChange={(e) => setGame1Title(e.target.value)}
          className="game-input"
          list="game-titles-1"
        />
        <datalist id="game-titles-1">
          {availableGames.map((game) => (
            <option key={game._id} value={game.title} />
          ))}
        </datalist>
        <input
          type="text"
          placeholder="Enter second game title..."
          value={game2Title}
          onChange={(e) => setGame2Title(e.target.value)}
          className="game-input"
          list="game-titles-2"
        />
        <datalist id="game-titles-2">
          {availableGames.map((game) => (
            <option key={game._id} value={game.title} />
          ))}
        </datalist>
      </div>

      <div className="comparison-actions">
        <button className="compare-button" onClick={handleCompare} disabled={!game1Title || !game2Title}>
          Compare Games
        </button>
        <button className="compare-button clear-button" onClick={handleClear} disabled={!game1Title && !game2Title && selectedGames.length === 0}>
          Clear
        </button>
      </div>

      {showComparison && selectedGames.length === 2 && (
        <>
          <div className="comparison-content">
            {selectedGames.map((game) => (
              <div key={game._id} className="game-comparison-card">
                <h2 className="card-title">{game.title}</h2>
                <div className="game-image2">
                  <img src={game.image} alt={game.title} />
                </div>
                <div className="card-details">
                  <p className="game-price">Price: <span className="value">${game.price}</span></p>
                  <p className="game-rating">Rating: <span className="value">{game.rating}★</span></p>
                  <h3 className="details-heading">Genre: <span className="value">{game.genre}</span></h3>
                  <h3 className="details-heading">System Requirements:</h3>
                  <ul>
                    <li>OS: <span className="value">{game.systemSpecs.os}</span></li>
                    <li>Processor: <span className="value">{game.systemSpecs.processor}</span></li>
                    <li>Memory: <span className="value">{game.systemSpecs.memory}</span></li>
                    <li>Graphics: <span className="value">{game.systemSpecs.graphics}</span></li>
                    <li>Storage: <span className="value">{game.systemSpecs.storage}</span></li>
                  </ul>
                  <h3 className="details-heading">Description:</h3>
                  <p className="description-text">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="winner-announcement">
            <h2>Winner: <span className="winner-name">{determineWinner()}</span></h2>
          </div>
        </>
      )}
    </div>
  );
}

export default GameComparisonPage;
