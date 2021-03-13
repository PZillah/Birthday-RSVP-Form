import React from "react";
import RsvpForm from "./RsvpForm";
import "./RsvpForm.css";
import background from "./sprinkles-off-white-wallpaper.jpg";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{ fontFamily: "cursive" }}>Birthday Party RSVP Form</h1>
      <RsvpForm />
    </div>
  );
}

export default App;
