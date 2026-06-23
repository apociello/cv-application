import { useState } from 'react';
import Preview from '../components/Preview';
import example from '../data/example';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
import Study from '../components/Study';
import './CvPage.css';

function CvPage() {
  const [contact, setContact] = useState({
    firstName: example.contact.firstName,
    lastName: example.contact.lastName,
    phone: example.contact.phone,
    email: example.contact.email,
    location: example.contact.location,
  });

  const [profile, setProfile] = useState(example.profile);
  const [education, setEducation] = useState(example.education);
  const [experience, setExperience] = useState(example.experience);

  return (
    <main className="cv-container">
      <div className="sections">
        <section className="contact">
          <h4>CONTACT</h4>
          <Contact contact={contact} setContact={setContact} />
        </section>

        <section className="profile">
          <h4>PROFILE</h4>
          <Profile profile={profile} setProfile={setProfile} />
        </section>

        <section className="education">
          <h4>EDUCATION</h4>
          {education.map((study) => (
            <Study
              study={study}
              education={education}
              setEducation={setEducation}
            />
          ))}
        </section>

        <section className="experience">
          <h4>EXPEREINCE</h4>

          {experience.map((job) => (
            <div key={job.id} className="job">
              <div className="form-line">
                <label htmlFor={`company-${job.id}`}>Company</label>
                <input
                  value={job.company}
                  onChange={(e) =>
                    setExperience(
                      experience.map((job2) =>
                        job.id === job2.id
                          ? { ...job2, company: e.target.value }
                          : job2,
                      ),
                    )
                  }
                  id={`company-${job.id}`}
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`position-${job.id}`}>Position</label>
                <input
                  value={job.position}
                  onChange={(e) =>
                    setExperience(
                      experience.map((job2) =>
                        job.id === job2.id
                          ? { ...job2, position: e.target.value }
                          : job2,
                      ),
                    )
                  }
                  id={`position-${job.id}`}
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`startYear-${job.id}`}>Start Year</label>
                <input
                  value={job.startYear}
                  onChange={(e) =>
                    setExperience(
                      experience.map((job2) =>
                        job.id === job2.id
                          ? { ...job2, startYear: e.target.value }
                          : job2,
                      ),
                    )
                  }
                  id={`startYear-${job.id}`}
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`endYear-${job.id}`}>End Year</label>
                <input
                  value={job.endYear}
                  onChange={(e) =>
                    setExperience(
                      experience.map((job2) =>
                        job.id === job2.id
                          ? { ...job2, endYear: e.target.value }
                          : job2,
                      ),
                    )
                  }
                  id={`endYear-${job.id}`}
                  type="text"
                />
              </div>

              <div className="description-line">
                <label htmlFor={`description-${job.id}`}>Description</label>
                <textarea
                  value={job.description}
                  onChange={(e) =>
                    setExperience(
                      experience.map((job2) =>
                        job.id === job2.id
                          ? { ...job2, description: e.target.value }
                          : job2,
                      ),
                    )
                  }
                  id={`description-${job.id}`}
                  type="text"
                />
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="preview-container">
        <Preview
          contact={contact}
          profile={profile}
          education={education}
          experience={experience}
        />
      </div>
    </main>
  );
}

export default CvPage;
