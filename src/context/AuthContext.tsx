import { useState, useEffect } from 'react';
import Storecontext, { AppContext, } from "./store"
import { useQuery, gql, useMutation } from '@apollo/client';

function AppProvider(props: any) {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState([] as any)
    const LOGIN_MUTATION = gql`
    mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
     user {
       email
       email
       firstName
        lastName    
    }
        }
    }`;
    const [mutateFunction, { data, loading, error: any }] = useMutation(LOGIN_MUTATION);

    function LoginUser(user: any) {

        const { email, password } = user
        mutateFunction({ variables: { email, password } });
        if (data) {
            setUser(data.login.user)
            console.log(data.login.user)
            localStorage.setItem("token", `Bearer ${data.login.token}`)
        }
    }

    const AuthContext = {
        login: LoginUser,
        user: user,
    }
    return (<Storecontext.Provider value={AuthContext} > {props.children}
    </Storecontext.Provider>)


}
export default AppProvider;