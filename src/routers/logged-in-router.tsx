import { isLoggedInVar } from '../apollo';

export const LoggedInRouter = () => {

  return (
    <div>
      <h1>LoggedIn Page</h1>
      <button onClick={() => isLoggedInVar(false)}>LogOut button</button>
    </div>
  )
}