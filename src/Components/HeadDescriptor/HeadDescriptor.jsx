"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HeadDescriptor.module.css";
import Image from "next/image";

const HeadDescriptor = ({ children, imag, head }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;

    const handleMove = (e) => {
      const height = el.clientHeight;
      const width = el.clientWidth;

      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);

      const string =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";

      el.style.transform = string;
    };

    const handleMouseOut = () => {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };

    const handleMouseDown = () => {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    };

    const handleMouseUp = () => {
      el.style.transform =
        "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseout", handleMouseOut);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseout", handleMouseOut);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.card} id={styles.card} ref={tiltRef}>
      <Image src={imag} alt="icon" />
      <span>{head}</span>
      <p>{children}</p>
    </div>
  );
};

export default HeadDescriptor;
