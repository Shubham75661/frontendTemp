import React from 'react'

const ApiGetCall = () => {
    const MakeApiGetCall = async() =>{
        try{
            const response = await fetch('http://localhost:3001/');
            if(response.ok){
                const data = await(response.json());
                console.log(data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div>
         <button
            onClick={MakeApiGetCall}
        >
            Make an get Api call
        </button>
    </div>
  )
}

export default ApiGetCall