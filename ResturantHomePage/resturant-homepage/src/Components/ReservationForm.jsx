import React, { useState } from "react"; // Importing React and the useState hook for state management
import "../Styles/Reservation.css"; // Importing CSS file for styling

// Main functional component for the reservation form
const ReservationForm = () => {
  // State to hold form data (inputs for name, email, date, time, and guests)
  const [formData, setFormData] = useState({
    name: "", // User's name
    email: "", // User's email (not required but included)
    date: "", // Reservation date
    time: "", // Reservation time
    guests: "", // Number of guests
  });

  // State to track if the form is successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to hold error messages for validation feedback
  const [errorMessage, setErrorMessage] = useState("");

  // Handler function to update formData state as the user types
  const handleChange = (e) => {
    // Dynamically updates the state for the specific field being edited
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler function to manage form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Simple validation to ensure all required fields are filled
    if (
      !formData.name || // Check if name is empty
      !formData.date || // Check if date is empty
      !formData.time || // Check if time is empty
      !formData.guests // Check if guests field is empty
    ) {
      setErrorMessage("Please fill in all the required fields"); // Set error message if validation fails
      return; // Stop further execution
    }

    setErrorMessage(""); // Clear any previous error messages

    // Simulate submission success by logging the data (placeholder for actual API call)
    console.log("Reservation Details:", formData);

    setIsSubmitted(true); // Show success message

    // Reset the form fields to their initial state
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });

    // Automatically hide the success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div id="reservation" className="reservation-form">
      {" "}
      {/* Main container for the form */}
      <h2>Make a Reservation</h2> {/* Header for the form */}
      {/* Display error message if any */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {/* Display success message if form is successfully submitted */}
      {isSubmitted && (
        <p className="success-message">Your reservation has been made!</p>
      )}
      {/* The form element */}
      <form onSubmit={handleSubmit}>
        {/* Input for user's name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange} // Attach change handler to update state
        />

        {/* Input for reservation date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange} // Attach change handler to update state
        />

        {/* Input for reservation time */}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange} // Attach change handler to update state
        />

        {/* Input for number of guests */}
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange} // Attach change handler to update state
        />

        {/* Submit button to trigger form submission */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm; // Export the component for use in other parts of the application
