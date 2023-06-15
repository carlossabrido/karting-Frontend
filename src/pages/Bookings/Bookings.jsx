import React, { useEffect, useState } from "react";
import "./Bookings.css";
import { useSelector } from "react-redux";
import { userData } from "../UserSlice";
import { bringBooking, deleteBookingBack } from "../../Services/Apicalls";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ModalB } from "../../common/ModalB/ModalB";

export const Booking = () => {
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

  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const handleShowModal = (bookingID) => {
    console.log("Booking ID:", bookingID);
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
            <div key={booking.id}>
              <div>{booking.client.name}</div>
              <div>{booking._id}</div>
              <div>{booking.start_date}</div>
              <div>{booking.type.circuit}</div>
              <div>
                {" "}
                <Button className="editButton" onClick={() => booking._id}>
                  Edit
                </Button>
                <ModalB
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  bookingId={selectedBookingId}
                  reloadBooking={updateBooking}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Container className="mt">
          {bookings.map((booking) => (
            <Row className="table" key={booking.id}>
              <Col>{booking.client.name}</Col>
              <Col>{booking._id}</Col>
              <Col>{booking.client.email}</Col>
              <Col>{booking.start_date}</Col>
              <Col>{booking.type.circuit}</Col>
              <Col>
                <Button
                  className="editButton m-1"
                  onClick={() => handleShowModal(booking._id)}
                >
                
                </Button>
                <Button
                  className="deleteButtton"
                  onClick={() => deleteBooking(booking._id)}
                ></Button>

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
