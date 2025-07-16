import { Link } from "react-router";
import useQuery from "../api/useQuery"


export default function JobsList() {
  const {
    data: jobs,
    loading,
    error,
  } = useQuery("/jobs", "job");


if (loading || !jobs) return <p>Loading...</p>
if (error) return <p>Sorry! {error}</p>

return (
  <ul>
    {jobs.map((job) => {
      <JobListItem key={job.id} job={job} />
    })}
  </ul>
  );
}

function JobListItem({ job }) {
  return (
    <li>
      <p>
        <Link to ={"/jobs/" + job.id}>{job.name}</Link>
      </p>
    </li>
  );
}