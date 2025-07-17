import useQuery from "../api/useQuery";
import { useParams } from "react-router";
import SessionUpdateForm from "./SessionUpdateForm";
import AddCharacterSection from "./AddCharacterSection";
import "./sessions.css";


const SessionById = () => {
  const { id } = useParams();
  const { data: session } = useQuery(`/sessions/${id}`, `session`);
  if(!session) return null
  return (
    <section>
      <h1>Session Details</h1>
      <ul className="sessionDetails">
        <li> <b>Session name: </b>{session.name} </li>
        <li> <b>Session date: </b>{session.date} </li>
        <li> <b>Dungeon Master:</b> ID: {session.dm_id} </li>
      </ul>

      <h2>Add a Character</h2>
      <AddCharacterSection />

      <h2>Update Your Session</h2>
      <SessionUpdateForm session={session}/>
    </section>
  )
}

export default SessionById