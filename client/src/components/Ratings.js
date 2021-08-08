import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

const Ratings = ({ value, text }) => {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Content>
        <span>
          <i
            className={
              value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          ></i>
        </span>
        <div className='reviews text-muted'>{text && text} Reviews </div>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className='ratings'>
      <OverlayTrigger trigger='hover' placement='right' overlay={popover}>
        <div
          className={
            "ratings-box ms-xxl-auto " +
            (value <= 2 ? "neg" : value <= 3 && value > 2 ? "mid" : "pos")
          }
        >
          <span className='ratings-content'>
            {value} <span>★</span>{" "}
          </span>
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default Ratings;
