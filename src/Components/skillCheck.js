import { SKILL_LIST } from '../consts.js';
function SkillCheck() {

    return (
      <div style={{border: '1px solid white', borderRadius: '5px', padding: '10px'}}>
          Skill Check
          <div>
            Skill: <select>
                {
                    SKILL_LIST.map(skill => (
                        <option value={skill.name} key={skill.name}>{skill.name}</option>
                    ))
                }
            </select>
            DC: <input type='text'></input>
            <button>Roll</button>
          </div>
  
      </div>
    
    );
  }
  
  export default SkillCheck;