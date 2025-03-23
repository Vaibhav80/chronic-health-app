import React from 'react';
import { Link } from 'react-router-dom';


const Login =()=>{
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card" style={{ width: '20rem' }}>
                <div className="card-body">
                    <form>
                        <div className='mb-2'>
                            <i
                                className="bi bi-person-circle"
                                style={{ fontSize: '3rem', marginRight: '10px' }}
                            />
                            <h1>Login</h1>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" placeholder="email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <div className="mt-3">
                        <a href="#" className="card-link">Forgot password?</a>
                    </div>
                    <div className="mt-3">
                    New User? <Link to="/register">Register here</Link>
                    </div>
                        
                </div>
            </div>
            </div>
  )
}

export default Login;