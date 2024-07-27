import React, { useState } from 'react';
import axios from 'axios';

const LoginRegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth/log-in', { username, password });
            const role = response.data.role;
            setMessage(`Bienvenido/a ${username}`);
        } catch (error) {
            setMessage('Clave incorrecta');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('/auth/sign-up', { username, password });
            setMessage('Registro exitoso, ahora puede ingresar');
        } catch (error) {
            setMessage('Error en el registro');
        }
    };

    const handleLogout = () => {
        setMessage('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-register-form">
            {message.includes('Bienvenido') ? (
                <div>
                    <h1>{message}</h1>
                    <button className="btn" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="User name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Clave"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                    <button className="btn" onClick={handleRegister}>Registrarse</button>
                    <button className="btn" onClick={handleLogin}>Ingresar</button>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default LoginRegisterForm;
