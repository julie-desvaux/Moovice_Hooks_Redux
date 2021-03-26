import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Config from "../../Config";

import "./Modal.scss";

export default function ModalComponent(props) {
  const {
    movieDetails,
    trailer,
    toggleModalFunction,
    toggleModal,
    media_type,
  } = props;
  const [widthModal, setWidthModal] = useState(window.innerWidth / 1.4);
  const [heightModal, setHeightModal] = useState(widthModal / 1.77);

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth < 650) {
        setWidthModal(window.innerWidth);
        setHeightModal(window.innerWidth / 1.77);
      } else {
        const width = window.innerWidth / 1.4;
        setWidthModal(width);
        setHeightModal(width / 1.77);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <Button variant="primary" onClick={toggleModalFunction}>
        See the trailer
      </Button>
      {toggleModal ? (
        <div className="moovice-modal">
          <h1 className="lemon">
            {media_type === "movie" ? movieDetails.title : movieDetails.name}
          </h1>
          <iframe
            width={widthModal}
            height={heightModal}
            src={`${Config.TRAILER_ROOT}${trailer.key}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <button className="btnClose" onClick={toggleModalFunction}>
            X
          </button>
        </div>
      ) : null}
    </>
  );
}
