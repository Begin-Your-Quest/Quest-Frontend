import useMutation from "../api/useMutation";

const SessionCreateForm = () => {
  const { mutate } = useMutation(`POST`, `/sessions`, [`sessions`]);

  const createSession = async (formData) => {
    const dmId = formData.get("dmId");
    const name = formData.get("name");
    const date = formData.get("date");
    mutate({dmId, name, date})
  }

  return (
    <>
      <form action={createSession}>
        <label>
          Dungeon Master ID:
          <input type="number" min="0" name="dmId" required/>
        </label>
        <label>
          Session Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          Session Date:
          <input type="date" name="date" required/>
        </label>
        <button>CREATE SESSION</button>
      </form>
    </>
  )
}

export default SessionCreateForm;