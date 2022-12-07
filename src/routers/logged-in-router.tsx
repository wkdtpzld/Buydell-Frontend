import { gql, useQuery } from '@apollo/client';
import { meQuery } from '../__generated__/meQuery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Restaurants } from '../pages/client/restaurants';

const ClientRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Restaurants />} />
        <Route path="*" element={<span>notFound</span>} />
      </Routes>
    </Router>
  )
}

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`

export const LoggedInRouter = () => {

  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  
  console.log(data?.me.role);
  console.log(error);
  

  if (!data || loading || error) {
    return (
      <div>
        <span>Loading</span>
      </div>
    )
  }

  return (
    <>
      {data.me.role === 'Client' && <ClientRouter />}
    </>
  )
}