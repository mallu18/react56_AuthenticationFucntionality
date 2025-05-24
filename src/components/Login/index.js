// // Write your JS code here
// import {withRouter} from 'react-router-dom'
// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
// import './index.css'

// class Login extends Component {
//   state = {
//     username: 'rahul',
//     password: 'rahul@2001',
//     errorMsg: '',
//     showError: false,
//   }

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props
//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showError: true, errorMsg})
//   }

//   onClickLogin = async () => {
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }

//     const response = await fetch('https://apis.ccbp.in/login', options)
//     const data = await response.json()

//     if (response.ok) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   render() {
//     const {errorMsg, showError} = this.state
//     const jwtToken = Cookies.get('jwt_token')

//     if (jwtToken !== undefined) {
//       return <Redirect to="/" />
//     }

//     return (
//       <div>
//         <h1>Please Login</h1>
//         <button type="button" onClick={this.onClickLogin}>
//           Login with sample Creds
//         </button>
//         {showError && <p>*{errorMsg}</p>}
//       </div>
//     )
//   }
// }

// export default withRouter(Login)
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errorMsg: '',
    showError: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onClickLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {errorMsg, showError} = this.state

    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with sample Creds
        </button>
        {showError && <p>*{errorMsg}</p>}
      </div>
    )
  }
}

export default Login
