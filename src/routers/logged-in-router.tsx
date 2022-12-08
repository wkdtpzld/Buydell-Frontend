import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Restaurants } from '../pages/client/restaurants';
import { Header } from '../components/common/Header';
import { useMe } from '../hooks/useMe';
import { ConfirmEmail } from '../pages/user/confirm-email';
import { EditProfile } from '../pages/user/edit-profile';

const ClientRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Restaurants />} />
      <Route path="/confirm" element={<ConfirmEmail />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="*" element={<span>notFound</span>} />
    </Routes>
  )
}

export const LoggedInRouter = () => {

  const { data, loading, error } = useMe();

  if (!data || loading || error) {
    return (
      <div>
        <span>Loading</span>
      </div>
    )
  }

  return (
    <Router>
      <Header/>
      {data.me.role === 'Client' && <ClientRouter />}
    </Router>
  )
}