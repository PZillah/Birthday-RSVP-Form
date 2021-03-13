import React, { useState } from "react";

const RsvpForm = () => {
  const initialFormState = {
    response: "yes",
    guestCount: "0",
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit}>
      Will you join us?
      <div className="mb-3">
          <fieldset>
        <label htmlFor="yes">
          <input
            id="yes"
            type="radio"
            name="response"
            onChange={handleChange}
            value="yes"
            checked={formData.response === "yes"}
          />
          Yeah!
        </label>
        <br />
        <label htmlFor="maybe">
          <input
            id="maybe"
            type="radio"
            name="response"
            onChange={handleChange}
            value="maybe"
            checked={formData.response === "maybe"}
          />
          Maybe
        </label>
        <br />
        <label htmlFor="no">
          <input
            id="no"
            type="radio"
            name="response"
            onChange={handleChange}
            value="no"
            checked={formData.response === "no"}
          />
          No, sorry.
        </label>
        </fieldset>
      </div>
      <br />
      {/* Dropdown menu for number of guests */}
      <div className="mb-3">
        <label htmlFor="guestCount">
          How many people are coming?
          <br />
          <select
            id="guestCount"
            name="guestCount"
            onChange={handleChange}
            value={formData.guestCount}
          >
            <option value="0">Please select an option</option>
            <option value="1">Just me!</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
          </select>
        </label>
      </div>
      <br />
      {/* Contact info */}
      <div className="mb-3">
        <label htmlFor="name">
          Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
      </div>
      <br />
      <div className="mb-3">
        {/* Message box */}
        <label htmlFor="message">Comments or Questions:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <br />
      <button type="submit" class="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default RsvpForm;
// <a href='https://www.freepik.com/photos'>photo created by rawpixel.com - www.freepik.com</a>
