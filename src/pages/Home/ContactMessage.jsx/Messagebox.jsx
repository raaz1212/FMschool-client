import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FiMail } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const sendMail = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Check if all fields are filled
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      messageInput.value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address.",
      });
      return;
    }

    const params = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    const serviceID = "service_8zn2a26";
    const templateID = "template_x3j14bd";

    emailjs
      .send(serviceID, templateID, params, "WxkJF4GCRh-HFsP7T")
      .then((res) => {
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully!",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section className="mb-40">
      <div className="text-center my-20">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          className="bg-transparent mx-auto max-w-md px-4"
        >
          <p className="mb-2">Your Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            required
            className="w-full p-3 rounded border-2 border-info bg-transparent"
          />
          <p className="my-2">Your Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            required
            className="w-full p-3 rounded border-2 border-info bg-transparent"
          />
          <p className="my-2">Your Message</p>
          <textarea
            placeholder="Enter Message"
            rows="7"
            id="message"
            required
            className="w-full p-3 rounded border-2 border-info resize-none bg-transparent"
          ></textarea>
          <div
            className="w-full text-center p-3 bg-info text-white rounded hover:bg-blue-500"
            onClick={sendMail}
          >
            Send Message
          </div>
          {message && <span>Thanks, we'll reply ASAP!!</span>}
        </form>
        <div className="flex flex-col h-96 mt-10 mx-auto max-w-md px-4 border-2 border-info">
          <h3 className="my-4">You can directly talk to us via</h3>
          <div className="mb-4">
            <FiMail className="text-5xl mx-auto mt-6"></FiMail>{" "}
            <h5 className="text-xs sm:text-lg text-center ">
              example@mail.com
            </h5>
            <GiSmartphone className="text-5xl mx-auto mt-6"></GiSmartphone>{" "}
            <h5 className="text-sm text-center sm:text-lg">+69 9996661</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
