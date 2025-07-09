import useQuery from '../api/useQuery';

const Sessions = () => {
  const { data: allSessions } = useQuery(`/sessions`, `sessions`);
  return (
    <>
      <h1>Sessions</h1>
      <h3>Your Stored Sessions:</h3>
      <ul>
        {
          allSessions &&

          allSessions.map((session) => {
            return (
              <>
                <li>{session.name}</li>
                <li>{session.date}</li>
                <br></br>
              </>
            )
          })
        }
        </ul>
    </>
  )
}

export default Sessions;