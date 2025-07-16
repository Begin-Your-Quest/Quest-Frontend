import useMutation from "../api/useMutation";
import "./Skills.css";


/** Users can create new activities with a name and description. */
export default function SkillForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/skills", ["skills"]);

  const addSkill = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };

  return (
    <>
      <h2>Add a new skill</h2>
      <form action={addSkill}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Name
          <input type="integer" name="magic points" />
        </label>
        <label>
          Name
          <input type="text" name="damage" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add skill"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
