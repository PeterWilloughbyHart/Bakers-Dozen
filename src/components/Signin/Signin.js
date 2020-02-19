import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <section>
            <input placeholder="username" type="text"></input>
            <input placeholder="password" type="password"></input>
            <Link to="/Feed"><button>Signin</button></Link>
        </section>
    )
}

export default Login;