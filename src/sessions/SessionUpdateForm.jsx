import useMutation from "../api/useMutation";
import { useParams } from "react-router";


const SessionUpdateForm = ({ session }) => {
  const { id } = useParams();
  const { mutate } = useMutation(`PUT`, `/sessions/${id}`, [`session`]);
  
  const updateSession = async (formData) => {
    const name = formData.get("name");
    const date = formData.get("date");
    mutate({name, date});
  };

  return (
    <>
      <form action={updateSession} className="updateSession">
        <label>
          Session Name:
        </label>
        <input type="text" name="name" required/>
        <label>
          Session Date:
        </label>
        <input type="date" name="date" required/>
        <button>UPDATE SESSION</button>
      </form>

    </>
  )
}

export default SessionUpdateForm;