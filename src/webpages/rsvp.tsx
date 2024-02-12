import "../components/CSS/rsvp.css";

export default function rsvp() {
  return (
    <>
      <form id="rsvpSubmission_form">
        <div style={{ backgroundColor: "green" }}>
          <label>
            <input type="radio" id="rsvp_attending" name="rsvpResponse" />
            <span className="rsvpText">Attending</span>
          </label>
          <br></br>
          <label style={{ border: "black 2px solid" }}>
            <input type="radio" id="rsvp_notAttending" name="rsvpResponse" />
            <span className="rsvpText">Not Attending</span>
          </label>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
