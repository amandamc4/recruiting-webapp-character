import { CLASS_LIST } from '../consts.js';
function MinimumRequirements({classChosen, closeRequirements}) {

    const classChosenName = CLASS_LIST[classChosen];

    return (
      <div style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '10px'}}>
      
        <div>
            {classChosen} Minimum Requirementd
            <div  style={{marginTop: '20px'}}>
            {Object.keys(classChosenName).map(skill => (
                <div key={skill} style={{padding: '10px'}}> 
                    {skill}: {classChosenName[skill]}
                </div>
                )
            )}
            </div>   
        </div>
        
          <button onClick={closeRequirements}>Close View</button>
      </div>
    
    
    );
  }
  
  export default MinimumRequirements;