import useQuery from "/src/api/useQuery";
import { useParams } from "react-router";
import useMutation from "../api/useMutation";


const SelectSkillSection = () => {
  const { id } = useParams();
  const { data: characterSkills } = useQuery("/skills", "skills");
  const { data: skills } = useQuery(`/characters/skills/${id}`, `characterSkill`);
  const { mutate } = useMutation(`POST`, `/characters/skills/${id}`, [`skills`, `characterSkill`]);


  const eventHandler = (event, skill) => {
    event.preventDefault();
    selectSkill(skill)
  }

  const selectSkill =  (skill) => {
    if(!skill) return null;
    const characterId = id;
    console.log(characterId);
    const skillId = skill.id;
    console.log(skillId);
    mutate({skillId, characterId});
  }

  return (
    <>
      <h2>Select Your Skills</h2>

      <ul className="characterSkill">
        {
          characterSkills && 
          characterSkills.map((skill) => {
            return (
              <li key={skill.id}>
                <a onClick={(event) => eventHandler(event, skill)} href="">
                  {skill.name}
                </a>
              </li>
            )
          })
        }
      </ul>

      <h2>Character Skills</h2>
      <ul>
        {
          skills && 
          skills.map((skill) => {
            return (
              <li key={skill.id}>{skill.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default SelectSkillSection;