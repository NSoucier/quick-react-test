import { useState, useEffect } from "react";

const UserListGpt = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!res.ok) {
                    throw new Error(`HTTP Error ${res.status}`);
                }
                const json = await res.json();
                setUserList(json);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        setLoading(true);
        fetchUsers();
    }, []);

    if (loading) {
        return <p>loading</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    console.log(userList);

    return (
        <div>
            <p>hello sir </p>
            <ul>
                {userList.map((user) => {
                    return (
                        <li
                            key={user.id}
                            style={{
                                margin: "10px",
                                backgroundColor: "beige",
                                width: "fit-content",
                            }}
                        >
                            <p>{user.name}</p>
                            <p>{user.website}</p>
                            <p>{user.phone}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UserListGpt;
