import classes from "./DoneBtn.module.css";
import circle from "../assets/img/circle.png";
import checkMark from "../assets/img/check-mark.png";

const DoneBtn: React.FC<{
  isDone: boolean;
  clickHandler: () => void;
}> = (props) => {
  const imgStyle = `${classes.checkBtn} ${props.isDone ? classes.done : ""}`;
  const imgSrc = props.isDone ? checkMark : circle;
  const imgAlt = props.isDone ? "done" : "not done";
  return (
    <button className={imgStyle} onClick={props.clickHandler}>
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};
export default DoneBtn;
