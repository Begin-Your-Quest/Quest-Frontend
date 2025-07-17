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
      <form action={createSession} className="addSection">
        <label>
          Dungeon Master ID:
        </label>
        <input type="number" min="0" name="dmId" required/>
        <label>
          Session Name:
        </label>
        <input type="text" name="name" required/>
        <label>
          Session Date:
        </label>
        <input type="date" name="date" required/>
        <button>CREATE SESSION</button>
      </form>
    </>
  )
}

export default SessionCreateForm;