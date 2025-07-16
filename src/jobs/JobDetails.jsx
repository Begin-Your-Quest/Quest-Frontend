import { useParams } from "react-router";
import useQuery from "../api/useQuery";


export default function JobDetails() {
const { id } = useParams();
const {
  data: job,
  loading,
  error,
} = useQuery(`/jobs/${id}`, "job");

if (loading) return <p>Loading...</p>;
if(error || !job) return <p>Sorry! {error}</p>;

return (
  <>
    <h1>{job.name}</h1>
    <p>Magic Points:{job.magicPoints}</p>
    <p>Damage:{job.damage}</p>
    <p>Description:{job.description}</p>
  </>
  );
}
