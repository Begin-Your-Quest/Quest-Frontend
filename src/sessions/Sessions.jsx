import useQuery from '../api/useQuery';
import { Link } from 'react-router';

const Sessions = () => {
  const { data: allSessions } = useQuery(`/sessions`, `sessions`);
  return (
    <>
      <h1>Sessions</h1>
      <h3>Your Stored Sessions:</h3>
      {
        allSessions &&

        allSessions.map((session) => {
          //console.log(session)
          return (
            <Link to={`/sessions/${session.id}`}>
              <h3>{session.name}</h3>
            </Link>
          )
        })
      }
      <button>CREATE A NEW SESSION</button> 
    </>
  )
}

export default Sessions  ;