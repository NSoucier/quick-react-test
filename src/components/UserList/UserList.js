import './UserList.css';
import User from '../User/User';
import { useEffect, useState } from 'react';
// import userData from '../../users.json';

function UserList () {
    const [ loading, setLoading ] = useState(true) // loading state
    const [ data, setData ] = useState([]); // data state
    const [ error, setError ] = useState(null); // error message state
    const [ refresh, setRefresh ] = useState(0); // increment when button is clicked to refetch API

    const handleClick = () => {
        console.log(refresh)
        setRefresh(refresh+1)
    }

    useEffect(() => {
        console.log('making api call')
        // api call
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                // const response = await fetch('/users.json');
                if (!response.ok) {
                    throw new Error('HTTP error: ' + response.status);
                }   
                
                const result = await response.json();
                setData(result);
                console.log(result)
            } catch(err) {
                setError('API error: ' + err.message);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [refresh])

    return <>
        <button onClick={handleClick} id='refresh-btn'>Refresh</button>
        <h2> {loading ? 'Loading...' : ''}</h2>
        <div style={{ color: 'red', fontWeight: 'bolder'}}>{error ? error : ''}</div>
        <div className='user-list'>
            {data.map((user) => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    </>
}

export default UserList;