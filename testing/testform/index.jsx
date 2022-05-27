import { useState } from 'react';

export default function TestForm(){

    const [user_id, setUser_id] = useState('');
    const [user_name, setUser_name] = useState('');
    const [message, setMessage] = useState('');
    
    async function getUser() {
        console.log("getUser was called");
        const res = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json());

        if(res) {
            setMessage(`
            Here is the response:\n
            ${JSON.stringify(res)}`);
            setUser_id(res.id);
            setUser_name(res.name);
        }
        else{
            setMessage("Something went wrong.")
        }
    }

    async function addUser() {
        console.log("addUser was called");
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id,
                user_name
            })
        }).then((response) => response.json());

        if(res) {
            setMessage(`
            Here is the response:\n
            ${JSON.stringify(res)}`);
        }
        else{
            setMessage("Something went wrong.")
        }
    }

    return(
        <div>
            <p>{ message }</p>
            <form target="_blank">
                <input  
                    type="number"
                    id="userid"
                    name="userid"
                    value={ user_id }
                    onChange={e => setUser_id(e.target.value)}
                />
                <input  
                    type="text"
                    id="username"
                    name="username"
                    value={ user_name }
                    onChange={e => setUser_name(e.target.value)}
                />    
                <button 
                    type="button"
                    onClick={ getUser }
                >
                    Get User
                </button>
                <button 
                    type="button"
                    onClick={ addUser }
                >
                    Add User
                </button>
            </form>
        </div>
    )
}