import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [games, setGames] = useState([]);
  const [featuredGames, setFeaturedGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/games");
        const data = await response.json();
        setGames(data);
        // Get top 3 rated games for featured section
        const sortedGames = [...data].sort((a, b) => b.rating - a.rating);
        setFeaturedGames(sortedGames.slice(0, 3));
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleCardClick = (game) => {
    navigate(`/gamedetails`, { state: game });
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Steam Game Explorer</h1>
          <p>Discover, Compare, and Explore the Best Games</p>
          <button className="cta-button" onClick={() => navigate('/filter')}>
            Explore Games
          </button>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-section">
        <h2>Featured Games</h2>
        <div className="featured-games">
          {featuredGames.map((game) => (
            <div 
              className="featured-card" 
              key={game._id} 
              onClick={() => handleCardClick(game)}
              style={{ backgroundImage: `url(${game.image})` }}
            >
              <div className="featured-overlay">
                <h3>{game.title}</h3>
                <div className="game-rating">{'★'.repeat(Math.floor(game.rating))}</div>
                <p className="game-price">{game.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Games Section */}
      <section className="all-games-section">
        <h2>All Games</h2>
        <div className="game-grid">
          {games.length > 0 ? (
            games.map((game) => (
              <div 
                className="game-card" 
                key={game._id} 
                onClick={() => handleCardClick(game)}
              >
                <div className="game-image">
                  <img src={game.image} alt={game.title} />
                  <div className="game-overlay">
                    <div className="game-info">
                      <h3>{game.title}</h3>
                      <div className="game-rating">{'★'.repeat(Math.floor(game.rating))}</div>
                      <p className="game-genre">{game.genre}</p>
                      <p className="game-price">{game.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="loading">Loading games...</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
