import './User.css';

function User ({ user }) {
    return <div className='user'>
        <img alt='user icon' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' width={50} />
        <h2>{user.name}</h2>
        <p><b>Username: </b>{user.username}</p>
        <p><b>Website: </b><a href={user.website}>{user.website}</a></p>
        
    </div>
}

export default User;
