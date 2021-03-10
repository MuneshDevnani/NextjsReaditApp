import Link from 'next/link'
import RedditLogo from '../images/logo.svg'
import { Fragment } from "react";

import { useAuthDispatch, useAuthState } from "../context/auth";
import Axios from 'axios';

const Navbar: React.FC = () => {
  const { authenticated, loading } = useAuthState()
  const dispatch = useAuthDispatch()

  const logout = () => {
    Axios.get('/auth/logout')
      .then(() => {
        dispatch ('LOGOUT')
        window.location.reload
      })
      .catch((err) => console.log(err)
      )
  }

  return <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
    <div className="flex items-center">
      <Link href="/">
        <RedditLogo className="w-8 h-8 mr-2" />
      </Link>
      <span className="text-2xl font-semibold">
        <Link href="/">readit</Link>
      </span>
    </div>
    <div
      className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white"
    >
      <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
      <input
        placeholder="search"
        type="text"
        className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
      />
    </div>
    <div className="felx">
      {!loading && (authenticated ? (
        <button
          className="w-32 py-1 mr-4 leading-5 hollow blue button"
          onClick={logout}
        >Logout</button>
      ) : (
        <Fragment>
          <Link href="/login">
            <a className="w-32 py-1 mr-4 leading-5 hollow blue button">
              Login
          </a>
          </Link>
          <Link href="/register">
            <a className="w-32 py-1 leading-5 blue button">
              Sign up
          </a>
          </Link>
        </Fragment>
      ))}

    </div>
  </div>
}


export default Navbar