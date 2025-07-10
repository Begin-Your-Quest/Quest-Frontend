import { useNavigate } from 'react-router';


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>

      <div className="content">
        <h1>Welcome Adventurers!!</h1>
        <p>Begin Your Quest...</p>
      </div>
    </>
  );
}
