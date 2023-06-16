    import React, { useEffect, useState } from "react";
    import "./Opinions.css";
    import parrilla from "../Media/parrilla.png";
    import Card from "react-bootstrap/Card";
    import Button from "react-bootstrap/Button";
    import Modal from "react-bootstrap/Modal";
    import { createReview, getOpinion } from "../../Services/Apicalls";
    import { useSelector } from "react-redux";
    import { userData } from "../UserSlice";
import { useNavigate } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";

    export const Opinions = () => {
    const dataRdx = useSelector(userData);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate= useNavigate()

    const[opinion,setOpinion]=useState({
        title:"",
        opinion:""
    })

    const[review,setReview]=useState([])

    

    useEffect(()=>{console.log(opinion)})

    const handlerOpinion=(e)=>{

        setOpinion((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
          } ))
          

    }

    useEffect(() => {
        getOpinion().then((resultado) => {
            console.log(resultado,'me las traje wey')
          setReview(resultado);
        });
      }, []);
    
    const makeReview =async () => {
        createReview(dataRdx.credentials,opinion)
        .then((resultado)=>console.log(resultado))
        .catch((error)=>console.log(error))
    };

    return (
        <div className="opinionDesign">
            {dataRdx.credentials.token &&(
        <div className="createReview">
            <Button variant="primary" onClick={handleShow}>
            Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                <input type="text" name='title' placeholder="Review Tittle" onChange={handlerOpinion} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" name="opinion" placeholder="Description" onChange={handlerOpinion} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={makeReview}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
      </div>
      )}
      <div className="row justify-content-center align-items-center">
      {review.map((review)=>(
        <div className="col-md-3 m-3" key={review.id}>
          <Card style={{ width: "18rem" }}>
            
            <Card.Body>
              <Card.Title>{review.title}</Card.Title>
             
              <Card.Subtitle className="mb-2 text-muted" >
                {review.opinion}
              </Card.Subtitle>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </div>  
         ))}
      </div>
    </div>
  );
};
