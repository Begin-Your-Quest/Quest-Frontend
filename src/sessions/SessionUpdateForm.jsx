import useMutation from "../api/useMutation";
import { useParams } from "react-router";


const SessionUpdateForm = ({ session }) => {
  const { id } = useParams();
  const { mutate } = useMutation(`PUT`, `/sessions/${id}`, [`session`]);
  
  console.log(session)
  const updateSession = async (formData) => {
    const name = formData.get("name");
    const date = formData.get("date");
    console.log(name);
    console.log(date);
    mutate({name, date});
  };

  return (
    <>
      <form action={updateSession}>
        <label>
          Session Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          Session Date:
          <input type="date" name="date" required/>
        </label>
        <button>UPDATE SESSION</button>
      </form>

    </>
  )
}

export default SessionUpdateForm;