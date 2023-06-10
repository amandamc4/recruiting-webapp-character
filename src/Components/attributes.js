function ClassAttributes({attributesList, onAttrPlusChange, onAttrMinusChange}) {

    return (
      <div style={{color: 'white', border: '1px solid white', borderRadius: '5px', padding: '10px'}}>
        {
            attributesList &&
            <div>
            Attributes
            <div  style={{marginTop: '20px'}}>
              {Object.keys(attributesList).map(attr => (
                  <div key={attr} style={{padding: '10px'}}> 
                     {attr}: {attributesList[attr]}
                     <button id={attr} onClick={onAttrPlusChange}>+</button>
                     <button id={attr} onClick={onAttrMinusChange}>-</button>
                  </div>
              )
              )}
            </div>   
            </div>
        }
          
      </div>
    
    );
  }
  
  export default ClassAttributes;