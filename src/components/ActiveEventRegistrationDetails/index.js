import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props

  const initialContainerView = () => (
    <p className="initial-container-content">
      Click on an event, to view its registration details.
    </p>
  )

  const yetToRegisterView = () => (
    <div className="yet-to-register-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-content">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <h1 className="registered-content">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="registrations-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-content">Stay tuned. We will reopen</p>
      <p className="registrations-closed-content">the registrations soon!</p>
    </div>
  )

  switch (activeEvent) {
    case 'YET_TO_REGISTER':
      return yetToRegisterView()
    case 'REGISTERED':
      return registeredView()
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosedView()
    default:
      return initialContainerView()
  }
}

export default ActiveEventRegistrationDetails
