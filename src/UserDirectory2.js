// import userData from './usersSRC.json';
import { useState, useEffect } from 'react';

const UserDirectory = () => {
    const [ error, setError ] = useState(null)
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // console.log('our data: ', userData)
            // setUsers(userData)
            try {
                const response = await fetch('/users.json');
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                const result = await response.json();
                setUsers(result);
                console.log(result);
            } catch(err) {
                setError(`API error: ${err.message}`)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])



    return <>
        <h2>User Directory Dos</h2>
        {loading ? <p>Loading...</p> : ''}
        {error ? <p style={{color: 'red'}}>{error}</p> : ''}

        <div id='userList' style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center', backgroundColor: 'beige', width: '80vw'}}>
            {users.filter((user) => (user.name.toLowerCase().includes(''))).map((user) => (
                <div className='user' key={user.id} style={{backgroundColor: 'grey', color: 'white', border: '2px solid black', margin: '10px'}}>
                    <img alt='profile picture' src={user.dp} width={70} />
                    <p><b>{user.name}</b></p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    </>
}

export default UserDirectory;