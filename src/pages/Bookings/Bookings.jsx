import React, { useEffect, useState } from "react";
import "./Bookings.css";
import { useSelector } from "react-redux";
import { userData } from "../UserSlice";
import { bringBooking } from "../../Services/Apicalls";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ModalB } from "../../common/ModalB/ModalB";

export const Booking = () => {
 
  const [showModal, setShowModal] = useState(false);

  const handleShowModal=()=>{
    setShowModal(true)
  }
  const handleCloseModal=()=>{
    setShowModal(false)
  }
  const [bookings, setBookings] = useState([]);
  // const[seek,setSeek]=useState("")
  const dataRdx = useSelector(userData);

  useEffect(() => {
    bringBooking(dataRdx.credentials)
      .then((resultado) => {
        console.log(resultado, "resultado");
        setBookings(resultado);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    // <div className='topScreen'>
    //      <Container  className="topCol justify-content-center">
    //     <Row>
    //       <Col >
    //         <input className='seekDesign'
    //           type="text"
    //           name="seek"
    //           placeholder='search'
    //           onChange={(e) => HandlerSeek(e)}
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    <div className="bookingDesign">
      {dataRdx.credentials.token.role === "client" ? (
        <div className="containerBooking">
          {bookings.map((booking) => (
            <div key={booking.id}>
              <div>{booking.client.name}</div>
              <div>{booking.client.lastname}</div>
              <div>{booking.start_date}</div>
              <div>{booking.type.circuit}</div>
              <div> <Button className="editButton" onClick={handleShowModal}>
                  Edit
                </Button>
                <ModalB
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                /></div>
            </div>
          ))}
        </div>
      ) : (
        <Container>
          {bookings.map((booking) => (
            <Row className="table" key={booking.id}>
              <Col>{booking.client.name}</Col>
              <Col>{booking.client.lastname}</Col>
              <Col>{booking.client.email}</Col>
              <Col>{booking.start_date}</Col>
              <Col>{booking.type.circuit}</Col>
              <Col>
              <Button className="editButton" onClick={handleShowModal}>
                  Edit
                </Button>
                <ModalB
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                />
               
                
              </Col>
            </Row>
          ))}
        </Container>
      )}
    </div>
    // </div>
  );
};
