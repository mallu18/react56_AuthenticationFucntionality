// Write your JS code here
import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookies.get('jwt_token')
  return token === undefined ? (
    <Redirect to="/login" />
  ) : (
    <Route {...rest} component={Component} />
  )
}

export default ProtectedRoute
