// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />

    <div className="home">
      <h1 className="header">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
