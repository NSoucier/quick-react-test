import { useEffect, useState } from "react";
// import userData from './users.json';

// fetch data 1) from 'https://jsonplaceholder.typicode.com/users'
// 2) users.json in public
// 3) users.json in src

const UserDirectory = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ search, setSearch ] = useState('');
    // console.log('search term: ', search)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                // const response = await fetch('/users.json');
                if (!response.ok) {
                    throw new Error("HTTP error: " + response.status);
                }
                const apiData = await response.json();
                console.log(apiData);
                setData(apiData);
            } catch (e) {
                setError("API error: " + e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // if (error) {
    //     return <p>{error}</p>
    // }

    // if (loading) {
    //     return <p>Loading...</p>
    // }

    return (
        <>
            <h2>User Directory </h2>
            <input value={search} onChange={(evt) => setSearch(evt.target.value)}/>
            {loading ? <p>Loading...</p> : ""}
            {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            <div
                className="userList"
                style={{
                    backgroundColor: "beige",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: 'center',
                    width: '75vw'
                }}
            >
                {(data.length === 0 && !loading && !error) ? <p>No users, sorry.</p> : ''}
                {data.filter((user) => user.name.toLowerCase().includes('u')).map((user) => (
                    <div key={user.id} style={{
                        backgroundColor: 'grey',
                        color: 'white',
                        margin: '10px',
                        padding: '5px'
                    }}>
                        <img src='/dp.jpg' width={60}/>
                        {/* <img alt='user profile picture' src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg' width={50}/> */}
                        <p><b>{user.name}</b></p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserDirectory;
