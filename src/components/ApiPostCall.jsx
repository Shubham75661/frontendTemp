import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
// import { setValue } from '../State/Reducers/initReducer'

const ApiPostCall = () => {
    // const value = useSelector((state) => state.init.value)
    const dispatch = useDispatch()

    const [taskList, settaskList] = useState([]);
    const [currentTask, setCurrentTask] = useState('');

    const MakeApiGetCall = async() =>{
        try{
            const response = await fetch('http://localhost:3001/');
            if(response.ok){
                const data = await(response.json());
                console.log(data);
                settaskList(data);
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const MakeApiPostCall = async() =>{
        try{
            const response = await fetch('http://localhost:3001/addTask',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({task : currentTask})
            })

            if(response.ok){
                await response.json(response.body)
                .then((data)=>{
                    MakeApiGetCall();
                    console.log(data);
                })
                
            }
        }
        catch(error){
            console.log('error in fetch - ', error)
        }
       
    }

    const MakeRemoveApiCall = async(task) =>{
        try{
            const response = await fetch('http://localhost:3001/removetask',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({task : task})
            })

            if(response.ok){
                await response.json(response.body)
                .then((data)=>{
                    MakeApiGetCall();
                    console.log(data);
                })
            }
        }
        catch(error){
            console.log('error in fetch - ', error)
        }
        MakeApiGetCall();
    }

    useEffect(() => {
        MakeApiGetCall()
    }, [])
  return (
    <div>
        <h1>Tasks</h1>
        {
            taskList.length > 0 &&
            taskList.map((item) =>(
                <>
                    <p key = {item}>{item}</p>
                    <button
                        onClick={() => MakeRemoveApiCall(item)}
                    >Remove</button>
                </>
            ))
        }
        <input
            type='text'
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            placeholder='Add a task'
        />
        <button
            onClick={() => MakeApiPostCall()}
        >Add</button>
    </div>
  )
}

export default ApiPostCall