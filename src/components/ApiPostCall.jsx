import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setValue } from '../State/Reducers/initReducer'

const ApiPostCall = () => {
    const value = useSelector((state) => state.init.value)
    const dispatch = useDispatch()
    const MakeApiPostCall = async() =>{
        try{
            const response = await fetch('http://localhost:3001/user',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({username : 'Shubham', Age : 24})
            })

            if(response.ok){
                const data = await response.json(response.body);
                console.log(data);
                dispatch(setValue(data.API_VISITS))
            }
        }
        catch(error){
            console.log('error in fetch - ', error)
        }
    }

    useEffect(() => {
        MakeApiPostCall()
    }, [])
  return (
    <div>
        <h2>Count : {value}</h2>
        <button
            onClick={MakeApiPostCall}
        >
            Make an post Api call
        </button>
    </div>
  )
}

export default ApiPostCall