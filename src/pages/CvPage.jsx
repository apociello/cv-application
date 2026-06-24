import { useState } from 'react';
import Preview from '../components/Preview';
import example from '../data/example';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
import Study from '../components/Study';
import Job from '../components/Job';
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
              key={study.id}
              study={study}
              education={education}
              setEducation={setEducation}
            />
          ))}

          <div className="add-div">
            <button
              onClick={() =>
                setEducation([
                  ...education,
                  {
                    id: crypto.randomUUID(),
                    institution: '',
                    startYear: '',
                    endYear: '',
                    degree: '',
                    description: '',
                  },
                ])
              }
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" x2="12" y1="19" y2="5" />
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
            </button>
          </div>
        </section>

        <section className="experience">
          <h4>EXPERIENCE</h4>
          {experience.map((job) => (
            <Job
              key={job.id}
              job={job}
              experience={experience}
              setExperience={setExperience}
            />
          ))}

          <div className="add-div">
            <button
              onClick={() =>
                setExperience([
                  ...experience,
                  {
                    id: crypto.randomUUID(),
                    company: '',
                    startYear: '',
                    endYear: '',
                    position: '',
                    description: '',
                  },
                ])
              }
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" x2="12" y1="19" y2="5" />
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
            </button>
          </div>
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
