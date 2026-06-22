import { useState } from 'react';
import './CvPage.css';
import Preview from '../components/Preview';
import example from '../data/example';

function CvPage() {
  const [contact, setContact] = useState({
    firstName: example.contact.firstName,
    lastName: example.contact.lastName,
    phone: example.contact.phone,
    email: example.contact.email,
    location: example.contact.location,
  });

  const [profile, setProfile] = useState({
    description: example.profile.description,
  });

  return (
    <main className="cv-container">
      <div className="sections">
        <section className="contact">
          <h4>CONTACT</h4>

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
              onChange={(e) =>
                setContact({ ...contact, lastName: e.target.value })
              }
              id="last-name"
              type="text"
            />
          </div>

          <div className="form-line">
            <label htmlFor="phone">Phone</label>
            <input
              value={contact.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
              id="phone"
              type="text"
            />
          </div>

          <div className="form-line">
            <label htmlFor="email">Email</label>
            <input
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              id="email"
              type="text"
            />
          </div>

          <div className="form-line">
            <label htmlFor="location">Location</label>
            <input
              value={contact.location}
              onChange={(e) =>
                setContact({ ...contact, location: e.target.value })
              }
              id="location"
              type="text"
            />
          </div>
        </section>

        <section className="profile">
          <h4>PROFILE</h4>
          <textarea
            value={profile.description}
            onChange={(e) => setProfile({ description: e.target.value })}
            name=""
            id=""
          ></textarea>
        </section>
        <section className="education">
          <h4>EDUCATION</h4>

          <div className="form-line">
            <label htmlFor="institution">Institution</label>
            <input id="institution" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="degree">Degree</label>
            <input id="degree" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="start-year">Start Year</label>
            <input id="start-year" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="end-year">End Year</label>
            <input id="end-year" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="description">Description</label>
            <input id="description" type="text" />
          </div>
        </section>

        <section className="experience">
          <h4>EXPEREINCE</h4>

          <div className="form-line">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="position">Position</label>
            <input id="position" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="start-year">Start Year</label>
            <input id="start-year" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="end-year">End Year</label>
            <input id="end-year" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="description">Description</label>
            <input id="description" type="text" />
          </div>
        </section>
      </div>

      <div className="preview-container">
        <Preview
          contact={contact}
          profile={profile}
          education={example.education}
          experience={example.experience}
        />
      </div>
    </main>
  );
}

export default CvPage;
