"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageRef = useRef();

  const browserImage = () => {
    imageRef.current.click();
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageRef}
          className={classes.input}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChangeImage}
        />
        <button
          className={classes.button}
          type="button"
          onClick={() => browserImage()}
        >
          Pick an Image
        </button>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="user picked image" fill />
          ) : "No image picked yet"}
        </div>
      </div>
    </div>
  );
}
