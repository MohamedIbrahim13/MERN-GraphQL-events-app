import Modal from "./Modal";
import EventsList from "./EventsList";

const EventPage = ({profile,userId}) => {
  return (
    <>

      <div className="events-control border border-light">
        <p>Share your own Events!</p>
        <Modal profile={profile} userId={userId}/>
      </div>
      <EventsList />
    </>
  );
};

export default EventPage;
