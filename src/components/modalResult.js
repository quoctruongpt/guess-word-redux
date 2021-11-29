import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { resetNumber } from "../actions/number";
import { resetScore } from "../actions/score";
import { setTimer } from "../actions/timer";

function ScoreModal() {
  const [show, setShow] = useState(false);
  const score = useSelector((state) => state.score);
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  useEffect(() => {
    if (number > 10) {
      setShow(true);
    }
  }, [number]);
  const handleClose = () => {
    setShow(false);
    dispatch(resetNumber(), resetScore(), setTimer(10));
  };
  return (
    <div>
      {/* Modal thông báo điểm */}
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn thắng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, bạn đã xuất sắc đạt được: {score} điểm</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose()}>
            Chơi lại
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ScoreModal;
