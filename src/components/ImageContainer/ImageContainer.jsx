import { Image } from "@chakra-ui/react";
import classes from "./imageContainer.module.css";

function ImageContainer({
  leftSrc = "",
  leftAlt = "",
  middleSrc = "",
  middleAlt = "",
  rightSrc = "",
  rightAlt = "",
  hideWhenSmall = false,
}) {
  if (middleSrc === "") {
    return (
      <div className={classes.imageContainer}>
        <Image className={classes["half-left"]} src={leftSrc} alt={leftAlt} />
        <Image
          className={classes["half-right"]}
          src={rightSrc}
          alt={rightAlt}
        />
      </div>
    );
  }

  return (
    <div className={classes.imageContainer}>
      <div className={classes.mid}>
        <Image src={middleSrc} alt={middleAlt} />
      </div>
      <div
        className={`${classes.left}  ${hideWhenSmall ? "hideWhenSmall" : ""}`}
      >
        <Image src={leftSrc} alt={leftAlt} />
      </div>
      <div
        className={`${classes.right}  ${hideWhenSmall ? "hideWhenSmall" : ""}`}
      >
        <Image src={rightSrc} alt={rightAlt} />
      </div>
    </div>
  );
}

export default ImageContainer;
