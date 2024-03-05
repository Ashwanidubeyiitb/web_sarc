import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const UserProfile = () => {
    const [username, setUsername] = useState('');
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('authTokens');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userID = decodedToken.user_id;
            setUsername(decodedToken.username);
            // Fetch completed todos for the current user
            axios.get(`http://127.0.0.1:8000/api/todos/?completed=true&user_id=${userID}`)
                .then(response => {
                    // Filter completed todos to only include those made by the current user
                    const userCompletedTodos = response.data.filter(todo => todo.user_id === userID);
                    setCompletedTodos(userCompletedTodos);
                })
                .catch(error => {
                    console.error('Error fetching completed todos:', error);
                });
        }
    }, []);

    return (
        <div style={{ height: '100%', width: '100vw', backgroundColor: 'black', padding: '5vh' }}>
            <h1 style={{ color: 'white', textShadow: '0 0 2vh rgba(255,105,180,0.6)', textAlign: 'center', marginBottom: '5vh' }}>User Profile</h1>
            <div style={{ marginBottom: '5vh' }}>
                <h2 style={{ color: 'white', marginBottom: '2vh' }}>User Information:</h2>
                <p style={{ color: 'white' }}>Username: {username}</p>
            </div>
            <div>
                <h2 style={{ color: 'white', marginBottom: '2vh' }}>Completed Todos:</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {completedTodos.map(todo => (
                        <li key={todo.id} style={{ marginBottom: '3vh', backgroundColor: 'black', border: '0.5vh solid pink', borderRadius: '2vh', padding: '2vh', color: 'white', boxShadow: '0 2vh 4vh rgba(0, 0, 0, 0.1)', textShadow: '0 0 2vh pink' }}>
                            <p style={{ marginBottom: '1vh' }}>{todo.title}</p>
                            {todo.completed_time && (
                                <p style={{ fontSize: '1.5vh', color: '#666' }}>Completed Time: {todo.completed_time}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
