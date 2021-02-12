import { useQuery, useMutation } from "@apollo/client";
import { EVENTS_QUERY, CANCEL_EVENT } from "../queries/query";
import Spinner from "./Spinner";
import moment from "moment";

const EventsList = () => {
  const { data, loading } = useQuery(EVENTS_QUERY);
  const [cancelEvent] = useMutation(CANCEL_EVENT);
  console.log(data);
  return (
    <>
      <ul className="event__list">
        {loading ? (
          <Spinner />
        ) : (
          data.events.map((event) => {
            return (
              <li className="mb-4" key={event.id}>
                <div className="card">
                  <div className="card-header">
                    {moment(Date(event.date).toString()).calendar()}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">${event.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        cancelEvent({
                          variables: { id: event.id },
                          refetchQueries: [{ query: EVENTS_QUERY }],
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default EventsList;
