import { useLocation } from "react-router";
import "./Discord.css";

export default function DiscordInviteLink() {
  const { search } = useLocation();
  const url = new URLSearchParams(search).get("url");

  if (!url) {
    return (
      <div className="page-box discord-page">
        <p>No invite link found.</p>
      </div>
    );
  }

  return (
    <div className="page-box discord-page">
      <h1 className="discord-title">Your Invite Link</h1>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn discord-button"
      >
        Join Server
      </a>
    </div>
  );
}
