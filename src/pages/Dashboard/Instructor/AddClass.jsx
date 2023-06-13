import React, { useState } from "react";
import { imageUpload } from "../../../components/Auth/Image";
import AddClassFrom from "./AddClassForm";
import toast from "react-hot-toast";
import { addClass } from "../../../components/Auth/AddedClass";

const AddClass = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const name = event.target.name.value;
    const instructorName = event.target.instructorName.value;
    const instructorEmail = event.target.instructorEmail.value;
    const availableSeats = event.target.availableSeats.value;
    const price = event.target.price.value;
    const image = event.target.image.files[0];

    imageUpload(image)
      .then((data) => {
        const classData = {
          name,
          instructorName,
          instructorEmail,
          availableSeats,
          price: parseFloat(price),
          image: data.data.display_url,
          status: "pending",
        };

        addClass(classData)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            toast.success("Class successfully listed!");
          })
          .catch((err) => console.log(err));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddClassFrom
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddClass;
