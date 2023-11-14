import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer';


const GithubContext = createContext();

const GithubUrl = "https://api.github.com";
const GithubToken = "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";

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    const searchUsers = async (text) => {
        setLoading();
        const params = new URLSearchParams({
            q: text,
        })
        const response = await fetch(`${GithubUrl}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GithubToken}`,
            },
        });
        const { items } = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: items,
        })
    };


    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${GithubUrl}/users/${login}`, {
            headers: {
                Authorization: `token ${GithubToken}`,
            },
        });
        if (response.status === 404) {
            window.location = "/notfound"
        } else {
            const data = await response.json();
            dispatch({
                type: "GET_USER",
                payload: data,
            })
        }
    };
    const clearUsers = () => dispatch({ type: "CLEAR_USERS" })
    const setLoading = () => {
        dispatch({
            type: "SET_LOADING"
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, user: state.user, isLoading: state.isLoading, searchUsers, clearUsers, getUser }}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubContext