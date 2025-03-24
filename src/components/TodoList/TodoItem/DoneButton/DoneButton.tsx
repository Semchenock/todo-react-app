import { FC } from "react";

import circle from "@assets/img/circle.png";
import checkMark from "@assets/img/check-mark.png";

import classes from "./DoneBtn.module.css";

type Props = {
  /** is task done */
  isDone: boolean;
  /** click handler */
  clickHandler: () => void;
};

/** done button component */
export const DoneButton: FC<Props> = ({ isDone, clickHandler }) => {
  const imgStyle = `${classes.checkBtn} ${isDone ? classes.done : ""}`;
  const imgSrc = isDone ? checkMark : circle;
  const imgAlt = isDone ? "done" : "not done";

  return (
    <button
      className={imgStyle}
      onClick={clickHandler}
      data-testid="complete toggler"
    >
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};
