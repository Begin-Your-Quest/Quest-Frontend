

export const NewCharacter = () => {
  return (
    <>
      <form>
        <label>
          Character Name:
          <input type="text" name="name" required/>
        </label>
        <label>
          Character class:
          <input type="text" name="class" required/>
        </label>
        <label>
          Description:
          <input type="text" name="description" required/>
        </label>
        <label>
          Attack:
          <input type="number" name="attack" required/>
        </label>
        <label>
          Hit Points:
          <input type="number" name="health" required/>
        </label>
        <button>UPDATE CHARACTER</button>
      </form>
    </>
  )
}