import './CvPage.css';
import Preview from '../components/Preview';
import example from '../data/example';

function CvPage() {
  return (
    <main className="cv-container">
      <div className="sections">
        <section className="contact">
          <h4>CONTACT</h4>

          <div className="form-line">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="telephone">Telephone</label>
            <input id="telephone" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="location">Location</label>
            <input id="location" type="text" />
          </div>
        </section>

        <section className="profile">
          <h4>PROFILE</h4>
          <textarea name="" id=""></textarea>
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
          contact={example.contact}
          profile={example.profile}
          education={example.education}
          experience={example.experience}
        />
      </div>
    </main>
  );
}

export default CvPage;
