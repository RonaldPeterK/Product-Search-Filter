import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import "./Card.css"
function Card(props) {
  return (
    <>
      <div className="card">

        <div className="overflow">
          <img src={props.img} alt="img" className="card-img-top" height="200rem"/>
        </div>
        
        <div className="card-body d-flex flex-column gap-2">
          <span>
            <span className="name card-title">{props.name}</span>
            <span className="catname ms-2">/ {props.category}</span>
          </span>
          
          <span className="ratings d-flex">
            <span className="stars text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
            <a href="..." className="text-decoration-none text-success ps-2">({props.review} Reviews)</a>
          </span>
          <span className="size mt-3">Size : {props.description}</span>
          <span className="price d-flex">
            <del className="delete me-3 text-danger fw-normal"><FaRupeeSign />1200</del>
            <span className="text-success"><FaRupeeSign />{props.price}</span>
          </span>
        </div>

        <div className="card-footer text-center d-flex justify-content-around">
          <a href="..." className="btn btn-warning disabled" >Stock : {props.stock}</a>
          <a href="..." className="btn btn-success">ADD CART</a>
        </div>

      </div>
    </>
    
  )
}
export default Card;