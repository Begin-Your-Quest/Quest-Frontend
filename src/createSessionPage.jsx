import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateSessionPage() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const navigate = useNavigate();

  const handleAddPlayer = () => {
    if (newPlayer.trim()) {
      setPlayers(prev => [...prev, newPlayer.trim()]);
      setNewPlayer('');
    }
  };

  const handleRemovePlayer = (idx) => {
    setPlayers(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      date: dateTime,
      description,
      players
    };

    try {
      const res = await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to create');
      navigate('/sessions');
    } catch (err) {
      console.error(err);
      alert('Error creating session');
    }
  };

  return (
    <>


      <div className="content">
        <h1>CREATE A SESSION</h1>

        <form onSubmit={handleSubmit} className="session-form">
          <label>
            Session Name
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Date &amp; Time
            <input
              type="datetime-local"
              value={dateTime}
              onChange={e => setDateTime(e.target.value)}
              required
            />
          </label>

          <label>
            Game Description
            <textarea
              rows="3"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <div className="add-player-section">
            <label>
              Add Player by Username
              <input
                type="text"
                value={newPlayer}
                onChange={e => setNewPlayer(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleAddPlayer} className="btn">
              Add Player
            </button>
          </div>

          <ul className="players-list">
            {players.map((player, idx) => (
              <li key={idx}>
                {player}
                <button
                  type="button"
                  onClick={() => handleRemovePlayer(idx)}
                  className="btn remove-player"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <button type="submit" className="btn submit-session">
            Create Session
          </button>
        </form>
      </div>
    </>
  );
}
