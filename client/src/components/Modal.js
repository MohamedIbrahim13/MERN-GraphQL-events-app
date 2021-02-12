import {useRef,useState} from 'react';
import { NavLink, Link ,useHistory} from "react-router-dom";
import { useMutation } from "@apollo/client";
import {ADD_EVENT,EVENTS_QUERY} from '../queries/query';

const Modal = ({ profile ,userId}) => {
  const [isOpen,setOpen] =useState(false);
  const [addEvent] = useMutation(ADD_EVENT);
  const title = useRef();
  const date = useRef();
  const price = useRef();
  
  const description = useRef();
  const user = useRef();
  const history = useHistory();
  const handleSubmit =(e)=>{
    e.preventDefault();
    addEvent({variables:{title:title.current.value,user:user.current.value,price:parseFloat(price.current.value),date:date.current.value,description:description.current.value},refetchQueries:[{query:EVENTS_QUERY}]});
	setOpen(false);
    
  }
  console.log(isOpen);
  return (
    <>
      <button
        type="button"
        className="btn border border-dark mx-auto d-block"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={()=>setOpen(true)}
      >
        Create Event
      </button>

      <div
        className={isOpen ? "modal fade show":"modal fade hide"}
        id="staticBackdrop"
        data-bs-backdrop="true"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        role={isOpen ? "dialog":null}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="staticBackdropLabel">
                Create Event
              </h5>
			  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" ref={title} id="title" />
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="creator"
                    aria-describedby="idHelpBlock"
                    ref={user}
                    defaultValue={profile.email}
                  />
                  <label htmlFor="creator" className="form-label">
                    Event Creator
                  </label>
                  <div id="idHelpBlock" class="form-text">
                    You must create the event by yourself
                  </div> 
                </div>
                <div class="form-floating mb-3">
                  <input type="number" step="0.01"  className="form-control" ref={price} id="price" />
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="date"
                    ref={date}
                  />
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="description"
                    ref={description}
                    rows="1"
                  ></textarea>
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                </div>
                <button type="submit" className="btn btn-primary d-grid col-12">
                  Done
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
