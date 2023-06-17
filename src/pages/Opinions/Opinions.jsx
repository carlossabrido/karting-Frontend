    import React, { useEffect, useState } from "react";
    import "./Opinions.css";
    import parrilla from "../Media/parrilla.png";
    import Card from "react-bootstrap/Card";
    import Button from "react-bootstrap/Button";
    import Modal from "react-bootstrap/Modal";
    import { createReview, deleteReview, getOpinion } from "../../Services/Apicalls";
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
        opinion:"",
        email:""
    })
   const[review,setReview]=useState([])
   const[errors,setErrors]=useState([])

  const handlerErrors=()=>{
    
    const alertError={}

    if(opinion.title.length>20){
      alertError.title="your title is over 15 characters"
    }

    if(opinion.opinion.length>150){
      alertError.opinion="your opinion is over 100 characters"
      
    }
    setErrors(alertError)
    
    if(Object.keys(alertError).length === 0){
      makeReview()

    }

   
  }  
   
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

      const updatesReviews= async ()=>{
        getOpinion()
        .then((resultado)=>
        setReview(resultado))
        .catch((error)=>console.log(error))
      }
    
    const makeReview =async () => {
        createReview(dataRdx.credentials,opinion)
        .then((resultado)=>console.log(resultado))
        updatesReviews()
        handleClose()
        .catch((error)=>console.log(error))
    };

    const removeReview=(opinionID)=>{
       deleteReview(dataRdx.credentials, opinionID)
        .then(
          (resultado) => {
            console.log(resultado, "eliminado")} );
          updatesReviews()
       .catch ((error)=>
        console.log(error));
      
    };

    

    return (
        <div className="opinionDesign">
            {dataRdx.credentials.token &&(
        <div className="createReview mt-2">
            <Button variant="danger" onClick={handleShow}>
              +
            
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
                <Button variant="primary" onClick={handlerErrors}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
      </div>
      )}
      <div className="width ">
      {review.map((review)=>(
        <div className="col-md-3 m-3" key={review.id}>
          <Card  border="success" style={{ width: "18rem" }}>
          <Card.Header className="red">{review.email}</Card.Header>
            <Card.Body>
              <Card.Title>{review.title}</Card.Title>
              {errors.title && <div className='error'>{errors.title}</div>}
              <Card.Subtitle> {review.opinion} </Card.Subtitle>
              
              {errors.opinion && <div className='error'>{errors.opinion}</div>}
              <Button variant="danger" onClick={()=>removeReview(review._id)}>
                </Button>
            </Card.Body>
          </Card>
        </div>  
         ))}
      </div>
    </div>
  );
};
