import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  mockupImage,
  showbtn,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.bgWhite} ${styles.section} ${banner}
      ${reverse ? styles.bgWhite : styles.bgPrimary}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showbtn && <Button assetUrl={assets.expo} link="" />}
        </div>
        <div className={`${styles.flexCenter} flex-1 p-8 sm:px-0`}>
          <img
            src={mockupImage}
            alt="mockupImage"
            className={`${styles.sectionImg} ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
