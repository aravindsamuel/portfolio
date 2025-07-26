import React, { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { IoSend } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import sound from "../pages/audio/tap-notification-180637.mp3";
import useSound from "use-sound";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#A1A1A1",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#7F27FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7F27FF",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "#A1A1A1",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#7F27FF",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#B0B0B0",
  },
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1e1e1e",
  color: "white",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: 24,
  minWidth: "300px",
};

function Contact() {
  const form = useRef();
  const [play] = useSound(sound, { volume: 0.3 });

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const { full_name, email, subject, message } = formData;
    setIsFormValid(
      full_name.trim() !== "" &&
        email.trim() !== "" &&
        subject.trim() !== "" &&
        message.trim() !== ""
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpxulcc",
        "template_8rhz6in",
        form.current,
        "6ANH0NFJCkWvtMyTO"
      )
      .then(
        (result) => {
          setModalMessage("✅ Message sent successfully!");
          setModalOpen(true);
          setFormData({
            full_name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setModalMessage("❌ Failed to send message. Please try again later.");
          setModalOpen(true);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="CPContainer flex flex-row gap-3">
        <div className="CPLayout">
          <h1 className="letsConnect">
            <span className="text-[#7F27FF]">Let's</span> Connect
          </h1>
          <p className="letContent text-white">
            I'm always excited to take on new challenges and collaborate with
            others. If you're looking for a developer who can bring your ideas
            to life or if you just want to chat about the latest in tech, feel
            free to reach out!
          </p>
        </div>
        <form ref={form} className="CPLayout" onSubmit={sendEmail}>
          <div>
            <h1 className="contact">
              Contact <span className="text-[#7F27FF]">Me</span>
            </h1>
            <div className="contact-input-container gap-3">
              <div className="CPFIL flex flex-row justify-center gap-3">
                <TextField
                  name="full_name"
                  className="CPFI"
                  id="outlined-basic"
                  label="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={inputStyles}
                  required
                />
                <TextField
                  name="email"
                  className="CPFI"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  sx={inputStyles}
                  required
                />
              </div>
              <TextField
                name="subject"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                value={formData.subject}
                onChange={handleChange}
                sx={inputStyles}
                required
              />
              <TextField
                name="message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                sx={inputStyles}
                multiline
                rows={6}
                placeholder="Enter your message"
                required
              />
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="sendMessageBtn my-3 bg-[#7F27FF] text-white rounded hover:bg-[#631fc8]"
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <IoSend /> Send
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="CPageSocialIcons flex flex-row gap-5 items-center justify-center mt-4">
        <a
          href="https://github.com/aravindsamuel"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconsItemsCP"
          onMouseEnter={play}
        >
          <FaGithub className="CPSI" />
        </a>
        <a
          href="https://leetcode.com/u/aravindsamuel33/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconsItemsCP"
          onMouseEnter={play}
        >
          <SiLeetcode className="CPSI" />
        </a>
        <a
          href="https://www.linkedin.com/in/aravindsamuel/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconsItemsCP"
          onMouseEnter={play}
        >
          <FaLinkedin className="CPSI" />
        </a>
        <a
          href="https://wa.me/919087890436"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconsItemsCP"
          onMouseEnter={play}
        >
          <BsWhatsapp className="CPSI" />
        </a>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle}>
          <h3>{modalMessage}</h3>
        </Box>
      </Modal>
    </div>
  );
}

export default Contact;
