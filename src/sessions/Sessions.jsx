import useQuery from '../api/useQuery';
import { Link } from 'react-router';
import SessionCreateForm from './SessionCreateForm';

const Sessions = () => {
  const { data: allSessions } = useQuery(`/sessions`, `sessions`);
  return (
    <>
      <h1>Sessions</h1>
      <h3>Your Stored Sessions:</h3>
      {
        allSessions &&

        allSessions.map((session) => {
          return (
            <Link to={`/sessions/${session.id}`}>
              <h3>{session.name}</h3>
            </Link>
          )
        })
      }
      <h2>Create a New Session</h2> 
      <SessionCreateForm />
    </>
  )
}

export default Sessions  ;