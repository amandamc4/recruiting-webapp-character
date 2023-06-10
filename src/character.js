import React, { useEffect, useState } from 'react';
import SkillCheck from './Components/skillCheck';
import ClassAttributes from './Components/attributes';
import CharClasses from './Components/charclasses';
import Skills from './Components/skills';
import MinimumRequirements from './Components/minimumRequirements';
import { ATTRIBUTE_LIST, SKILL_LIST } from './consts.js';

function Character({name}) {
    const [attributes, setAttribute] = useState(null)
    const [skills, setSkills] = useState(null)
    const [openRequirements, setOpenRequirements] = useState(false)
    const [viewClass, setViewClass] = useState('')
    
    useEffect(() => {
        const attributesState = {};
        ATTRIBUTE_LIST.forEach(attr => {
            attributesState[attr] = 0
        });
        setAttribute(attributesState)

        const skillsState = []
        SKILL_LIST.forEach(skill => {
            skillsState.push({
                name: skill.name, skillValue: 0,
                attributeModifier: skill.attributeModifier, modifierValue: 0
            })    
        });
        setSkills(skillsState)
    }, [])

    

    const handleAttributePlusChange = (e) => {
        const currentValue = attributes[e.target.id]
        setAttribute(previousVal => ({
            ...previousVal,
            [e.target.id]: currentValue + 1
        }))
    }  
    
    const handleAttributeMinusChange = (e) => {
        if(attributes[e.target.id] === 0) {
            return;
        }
        const newValue = attributes[e.target.id] - 1
        setAttribute(previousVal => ({
            ...previousVal,
            [e.target.id]: newValue < 0 ? 0 : newValue
        }))
    }  
    
    const handleSkillPlusChange = (e) => {
        const newSkills = skills.map(skill => {
            if(skill.name !== e.target.id) {
                return skill;
            } else {
                return {
                    ...skill,
                    skillValue: skill.skillValue + 1
                }
            }
        });
        setSkills(newSkills)
    }  
    
    const handleSkillMinusChange = (e) => {
        const newSkills = skills.map(skill => {
            if(skill.name !== e.target.id) {
                return skill;
            } else {
                const newValue = skill.skillValue - 1 < 0 ? 0 : skill.skillValue - 1
                return {
                    ...skill,
                    skillValue: newValue
                }
            }
        });
        setSkills(newSkills)
    }    

    const handleCloseRequirements = () => {
        setOpenRequirements(false)
    }

    const handleChooseClass = (classChosen) => {
        setOpenRequirements(true)
        setViewClass(classChosen)
    }

  return (
    <div style={{height: '100%', padding: '30px'}}>
        <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
            <div>Character: {name}</div>
            <SkillCheck style={{marginTop: '50px'}}/>
        </div>
        <div style={{marginTop: '30px', display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
            <ClassAttributes attributesList={attributes} onAttrPlusChange={handleAttributePlusChange} onAttrMinusChange={handleAttributeMinusChange}/>
            <CharClasses matchAttributes={handleChooseClass}/>
            { openRequirements && <MinimumRequirements classChosen={viewClass} closeRequirements={handleCloseRequirements}/> }
            <Skills skillList={skills} onSkillPlusChange={handleSkillPlusChange} onSkillMinusChange={handleSkillMinusChange}/>
        </div>

    </div>
  );
}

export default Character;