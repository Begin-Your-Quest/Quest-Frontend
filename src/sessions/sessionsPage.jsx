import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/sessions')
      .then(res => res.json())
      .then(data => setSessions(data))
      .catch(console.error);
  }, []);

  return (
    <>

      <div className="content">
        <h1>SESSIONS</h1>

        <button
          onClick={() => navigate('/sessions/new')}
          className="btn create-session"
        >
          Create New Session
        </button>

        <div id="sessions-list">
          {sessions.length === 0 ? (
            <p>No sessions found.</p>
          ) : (
            sessions.map(session => (
              <div key={session.id} className="session-card">
                <h2>{session.name}</h2>
                <p>{new Date(session.date).toLocaleString()}</p>
                <button
                  onClick={() => navigate(`/sessions/${session.id}`)}
                  className="btn view-session"
                >
                  View Session
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
