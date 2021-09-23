import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const activeEventClassName = isActive ? 'active-event-image' : 'event-image'

  const onClickEventItem = () => {
    onClickEvent(id, registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className={activeEventClassName} />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
