import {login} from '@/actions'
import { useFormState } from 'react-dom'

const LogoutForm=()=>{

    const [state,formAction]=useFormState<any,FormData> (login,undefined)
    return (
        <form action={formAction}>
            <input type='txt' name='username' required placeholder="username"/>
            <input type='password' name='password' required placeholder="password"/>
            <button>logout</button>
            {state?.error && <p>{state.error}</p>}
        </form>
    )
}

export default LogoutForm