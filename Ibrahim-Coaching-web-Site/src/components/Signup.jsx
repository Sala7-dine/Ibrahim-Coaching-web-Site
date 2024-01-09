import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext'
import logo from "../assets/logob.svg";
import gym from "../assets/gym3.jpg";

const Signup = () => {
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [laoding, setLaoding] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Password do not match !!');
        }

        try {
            setError("")
            setLaoding(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/Dashboard")
        } catch {
            setError("Feild to create an account");

        }
        setLaoding(false);

    }


    return (


        <div className='container mx-auto flex items-center justify-center h-screen overflow-hidden'>
        <div className="min-h-full flex-1 flex-col justify-center lg:px-8 md:px-6 mt-52">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an account
                </h2>

                {error && <div className="mt-5 w-full justify-center text-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm" role="alert">
                    {error} </div> }
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                ref={emailRef}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder='Enter your email here'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                ref={passwordRef}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder='Enter your password here'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmatin Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                ref={passwordConfirmationRef}
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                autoComplete="current-password_confirmation"
                                placeholder='Enter your password here'
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            className="flex w-full gap-1 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={laoding}
                        >
                            Sign up
                            {laoding && <svg width="15" height="15" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account ? {' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login in Here.
                    </Link>
                </p>
            </div>
        </div>

        <div className='flex-1 w-full hidden lg:block min-h-full bg-gym bg-cover'>
            </div>
        </div>


    )
}

export default Signup