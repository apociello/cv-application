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
              study={study}
              education={education}
              setEducation={setEducation}
            />
          ))}
        </section>

        <section className="experience">
          <h4>EXPEREINCE</h4>

          {experience.map((job) => (
            <Job
              job={job}
              experience={experience}
              setExperience={setExperience}
            />
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
