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

  const [profile, setProfile] = useState(example.profile);
  const [education, setEducation] = useState(example.education);
  const [experience, setExperience] = useState(example.experience);

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
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            name=""
            id=""
          ></textarea>
        </section>

        <section className="education">
          <h4>EDUCATION</h4>
          {education.map((study) => (
            <div key={study.id} className="study">
              <div className="form-line">
                <label htmlFor={`institution-${study.id}`}>Institution</label>
                <input
                  value={study.institution}
                  onChange={(e) =>
                    setEducation(
                      education.map((study2) =>
                        study2.id === study.id
                          ? { ...study2, institution: e.target.value }
                          : study2,
                      ),
                    )
                  }
                  id={`institution-${study.id}`}
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`degree-${study.id}`}>Degree</label>
                <input
                  value={study.degree}
                  id={`degree-${study.id}`}
                  onChange={(e) =>
                    setEducation(
                      education.map((study2) =>
                        study2.id === study.id
                          ? { ...study2, degree: e.target.value }
                          : study2,
                      ),
                    )
                  }
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`startYear-${study.id}`}>Start Year</label>
                <input
                  value={study.startYear}
                  onChange={(e) =>
                    setEducation(
                      education.map((study2) =>
                        study2.id === study.id
                          ? { ...study2, startYear: e.target.value }
                          : study2,
                      ),
                    )
                  }
                  id={`startYear-${study.id}`}
                  type="text"
                />
              </div>

              <div className="form-line">
                <label htmlFor={`endYear-${study.id}`}>End Year</label>
                <input
                  value={study.endYear}
                  onChange={(e) =>
                    setEducation(
                      education.map((study2) =>
                        study2.id === study.id
                          ? { ...study2, endYear: e.target.value }
                          : study2,
                      ),
                    )
                  }
                  id={`endYear-${study.id}`}
                  type="text"
                />
              </div>

              <div className="description-line">
                <label htmlFor={`description-${study.id}`}>Description</label>
                <textarea
                  value={study.description}
                  onChange={(e) =>
                    setEducation(
                      education.map((study2) =>
                        study2.id === study.id
                          ? { ...study2, description: e.target.value }
                          : study2,
                      ),
                    )
                  }
                  id={`description-${study.id}`}
                  type="text"
                />
              </div>
            </div>
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
