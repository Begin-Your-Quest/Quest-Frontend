import useQuery from '../api/useQuery';
import { Link } from 'react-router';
import SessionCreateForm from './SessionCreateForm';
import "./sessions.css";

const Sessions = () => {
  const { data: allSessions } = useQuery(`/sessions`, `sessions`);
  return (
    <section className="sessions">
      <h1>Sessions</h1>
      <h3>Your Stored Sessions:</h3>
      {
        allSessions &&

        allSessions.map((session) => {
          return (
            <Link to={`/sessions/${session.id}`} key={session.id}>
              <h3 className='sessionName'>{session.name}</h3>
            </Link>
          )
        })
      }
      <h3>Create a New Session</h3> 
      <SessionCreateForm />
    </section>
  )
}

export default Sessions  ;