import React, { useState } from "react";
import "../Styles/Reservation.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      setErrorMessage("Please fill in all the required fields");
      return;
    }

    setErrorMessage("");
    console.log("Reservation Details:", formData);
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <div id="reservation" className="reservation-form">
      <h2>Make a Reservation</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {isSubmitted && (
        <p className="success-message">Your reservation has been made!</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
