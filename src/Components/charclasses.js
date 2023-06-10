import { CLASS_LIST } from '../consts.js';
function CharClasses({matchAttributes}) {

    return (
      <div style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '10px'}}>
      
        <div>
        Classes
        <div  style={{marginTop: '20px'}}>
          {Object.keys(CLASS_LIST).map(attr => (
              <div key={attr} style={{padding: '10px'}} onClick={() => matchAttributes(attr)}> 
                  {attr}
              </div>
            )
        )}
        </div>   
        </div>
        
          
      </div>
    
    
    );
  }
  
  export default CharClasses;