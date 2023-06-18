import React, { useEffect, useState } from "react";
import "./Bookings.css";
import { useSelector } from "react-redux";
import { userData } from "../UserSlice";
import { bringBooking, deleteBookingBack } from "../../Services/Apicalls";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ModalB } from "../../common/ModalB/ModalB";
import Card from 'react-bootstrap/Card';


export const Booking = () => {
  const [bookings, setBookings] = useState([]);
  // const[seek,setSeek]=useState("")
  const dataRdx = useSelector(userData);

  useEffect(() => {
    bringBooking(dataRdx.credentials)
      .then((resultado) => {
        ;
        setBookings(resultado);
      })
      .catch((error) => console.log(error));
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const handleShowModal = (bookingID) => {
    setSelectedBookingId(bookingID);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedBookingId(null);
    setShowModal(false);
  };

  // update booking
  const updateBooking = () => {
    bringBooking(dataRdx.credentials)
      .then((resultado) => setBookings(resultado))
      .catch((error) => console.log(error));
  };

  // delete booking function

  const deleteBooking = async (bookingID) => {
    try {
      await deleteBookingBack(dataRdx.credentials, bookingID)
      .then(
        (resultado) => {
          console.log(resultado, "eliminado")} );
        updateBooking()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bookingDesign">
  {dataRdx.credentials.token.role === "client" ? (
    <div className="containerBooking">
      {bookings.map((booking) => (
        <Card
          key={booking.id}
          bg="secondary"
          text="white"
          style={{ width: '18rem' }}
          className="mb-2 m-1"
        >
          <Card.Header>{booking.client.name}</Card.Header>
          <Card.Body>
            <Card.Title>{booking._id}</Card.Title>
            <Card.Text>Date:</Card.Text>
            <Card.Text>{booking.start_date}</Card.Text>
            <Card.Text>Circuit:</Card.Text>
            <Card.Text>{booking.type.circuit}</Card.Text>
            <Button  variant="danger" onClick={() =>handleShowModal( booking._id)}>
              Edit
            </Button>
            
            <ModalB
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              bookingId={selectedBookingId}
              reloadBooking={updateBooking}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  ) 
      : (
        <Container className="mt">
          {bookings.map((booking) => (
            <Row className="table2" key={booking.id}>
              <Col>{booking.client.name}</Col>
              <Col >{booking.client.lastname}</Col>
              <Col className="noMobile">{booking.client.email}</Col>
              <Col className="noMobile">{booking.start_date}</Col>
              <Col>{booking.type.circuit}</Col>
              <Col>
                <Button
                  className=" m-1"
                  onClick={() => handleShowModal(booking._id)}
                >
                </Button>
                <Button variant="danger"
                  className="deleteButtton"
                  onClick={() => deleteBooking(booking._id)}
                ></Button>{''}

                <ModalB
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  bookingId={selectedBookingId}
                  reloadBooking={updateBooking}
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
