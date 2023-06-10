function Skills({skillList, onSkillPlusChange, onSkillMinusChange}) {
    return (
        <div style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '10px'}}>
        {
            skillList?.length > 0 &&
            <div>
            Skills
            <div  style={{marginTop: '20px'}}>
              {skillList.map((skill, index) => (
                  <div key={index} style={{padding: '10px'}}> 
                     {skill.name}: {skill.skillValue} {`(${skill.attributeModifier}): ${skill.modifierValue}`}
                     <button id={skill.name} onClick={onSkillPlusChange}>+</button>
                     <button id={skill.name} onClick={onSkillMinusChange}>-</button>
                  </div>
              )
              )}
            </div>   
            </div>
        }
          
      </div>
    
    
    );
  }
  
  export default Skills;