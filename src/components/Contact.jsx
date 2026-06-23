function Contact({ contact, setContact }) {
  return (
    <>
      <div className="form-line">
        <label htmlFor="first-name">First Name</label>
        <input
          value={contact.firstName}
          onChange={(e) =>
            setContact({ ...contact, firstName: e.target.value })
          }
          id="first-name"
          type="text"
        />
      </div>

      <div className="form-line">
        <label htmlFor="last-name">Last Name</label>
        <input
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
          id="last-name"
          type="text"
        />
      </div>

      <div className="form-line">
        <label htmlFor="phone">Phone</label>
        <input
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          id="phone"
          type="text"
        />
      </div>

      <div className="form-line">
        <label htmlFor="email">Email</label>
        <input
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          id="email"
          type="text"
        />
      </div>

      <div className="form-line">
        <label htmlFor="location">Location</label>
        <input
          value={contact.location}
          onChange={(e) => setContact({ ...contact, location: e.target.value })}
          id="location"
          type="text"
        />
      </div>
    </>
  );
}

export default Contact;
