"use client";

import {login} from '@/action';
import { useFormState } from 'react-dom'

const LoginForm=()=>{

    const [state,formAction]=useFormState<any,FormData>(login,undefined);
    return (
        <form action={formAction}>
            <input type='text' name='username' required placeholder="username"/>
            <input type='password' name='password' required placeholder="password"/>
            <button>login</button>
            {state?.error && <p>{state.error}</p>}
        </form>
    )
}

export default LoginForm;