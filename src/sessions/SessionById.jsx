import useQuery from "../api/useQuery";
import { useParams } from "react-router";
import SessionUpdateForm from "./SessionUpdateForm";
import AddCharacterSection from "./AddCharacterSection";


const SessionById = () => {
  const { id } = useParams();
  const { data: session } = useQuery(`/sessions/${id}`, `session`);
  if(!session) return null
  return (
    <>
      <h1>Session #{session.id} Details</h1>
      <ul>
        <li> <b>Session name: </b>{session.name} </li>
        <li> <b>Session date: </b>{session.date} </li>
        <li> <b>Dungeon Master:</b> ID: {session.dm_id} </li>
      </ul>

      <h2>Add a Character</h2>
      <AddCharacterSection />

      <h2>Update Your Session</h2>
      <SessionUpdateForm session={session}/>
    </>
  )
}

export default SessionById