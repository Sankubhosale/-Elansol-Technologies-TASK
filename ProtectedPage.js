import React from 'react';
import { useHistory } from 'react-router-dom';

const ProtectedPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    if (!user) {
        history.push('/login');
        return null;
    }

    return (
        <div className="protected-page">
            <h2>Welcome, {user.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>{user.dob}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProtectedPage;
