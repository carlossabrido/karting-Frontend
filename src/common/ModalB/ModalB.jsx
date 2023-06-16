import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userData } from "../../pages/UserSlice";
import { bringBooking, deleteBookingBack, getCircuit, modifyBookingBack } from "../../Services/Apicalls";
import moment from "moment/moment";

export const ModalB = ({ showModal, handleCloseModal, bookingId, reloadBooking }) => {
  const[formValid,SetformValid]=useState(false)
  const rdxData = useSelector(userData);
  const [hour, setHour] = useState([
    "11:00",
    "12:00",
    "13:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);
  const [idBooking, setIdBooking] = [{
    booking:bookingId
  }];


  const [modifyBooking, setModifyBooking] = useState({
    type: "",
    start_date: "",
    start_time: "",
  });

  

  const [circuit, setCircuit] = useState([]);
  const [selCircuit, setSelCircuit] = useState("");
  const [selHour, setSelHour] = useState("");

  useEffect(() => {
    getCircuit().then((resultado) => {
      setCircuit(resultado);
    });
  }, []);

  const handleClose = () => {
    handleCloseModal();
  };

  

  const handlerModifyBooking = async (name, value) => {
    setModifyBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSelHour(value);

    // if(modifyBooking.start_date  && modifyBooking.start_time ) {
    //   SetformValid(true)
    // }else{
    //   SetformValid(false)
    // }
  };

  
  const handlerModifyBookingcircuit = async (e, circuitId, circuitName) => {
    e.preventDefault();
    setModifyBooking((prevState) => ({
      ...prevState,
      type: circuitId,
    }));
    setSelCircuit(circuitName);
  };

 
// modify booking function 
  const editBooking = async (e) => {
    e.preventDefault();
    const selectDate = moment(modifyBooking.start_date);
    const selectTime = moment(modifyBooking.start_time, "HH:mm");
    const adjustedDate = selectDate
      .set("hour", selectTime.hours())
      .set("minute", selectTime.minutes())
      .set("second", 0);
    const fixDate = adjustedDate.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    const updateBooking = { ...modifyBooking, start_date: fixDate };


    console.log(modifyBookingBack,'que te doy')
    try{
      console.log(idBooking,'josete')
    await modifyBookingBack(rdxData.credentials,idBooking.booking ,updateBooking)
      .then((resultado) => {
        console.log(resultado);
      })
      reloadBooking()
      handleClose()
    }
    catch(error){ console.log(error)};
  }


  
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton
            id="dropdown-item-button "
            title={selCircuit ? selCircuit : "Circuitos"}
          >
            {circuit &&
              circuit.map((circuit) => (
                <Dropdown.Item
                  key={circuit._id}
                  name="type"
                  as="button"
                  eventKey={circuit.id}
                  onClick={(e) =>
                    handlerModifyBookingcircuit(e, circuit._id, circuit.circuit)
                  }
                >
                  {circuit.circuit}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Modal.Body>
        <Modal.Body>
          <input
            type="date"
            name="start_date"
            placeholder="start date"
            onChange={(e) => {
              handlerModifyBooking("start_date", e.target.value);
            } }
          />
        </Modal.Body>
        <Modal.Body>
          <DropdownButton
            type="time"
            id="start_time"
            title={selHour ? selHour : "Time"}
            onSelect={(value) => {
              handlerModifyBooking("start_time", value);
            }}
          >
            {hour.map((hour) => (
              <Dropdown.Item eventKey={hour}>{hour}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editBooking} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
