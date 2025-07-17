import { useState } from "react";
import { useNavigate } from "react-router";
import { useApi } from "../api/ApiContext";
import "./Discord.css";

export default function DiscordCreateForm() {
  const navigate = useNavigate();
  const { request } = useApi();

  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      
      const { inviteUrl } = await request("/discord/create", {
        method: "POST",
        body: JSON.stringify({ channelName, description, sessionId }),
      });
    
      navigate(`/discord/invite?url=${encodeURIComponent(inviteUrl)}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-box discord-page">
      <h1 className="discord-title">Create a Discord Server</h1>
      <form className="discord-form" onSubmit={onSubmit}>
        <label className="discord-label">
          Channel Name
          <input
            className="discord-input"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            required
          />
        </label>
        <label className="discord-label">
          Description
          <input
            className="discord-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label className="discord-label">
          Session ID
          <input
            className="discord-input"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn discord-button">
          Generate Invite
        </button>
        {error && <p className="discord-error">{error}</p>}
      </form>
    </div>
  );
}
