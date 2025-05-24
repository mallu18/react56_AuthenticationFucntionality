// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div>
    <Header />

    <div className="aboutContainer">
      <h1 className="headerAbout">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
