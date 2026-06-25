function Preview({ contact, profile, education, experience }) {
  return (
    <div className="preview">
      <div className="preview-header">
        <div className="preview-name">
          <h1>
            <span className="first-name">{contact.firstName}</span>
            <span className="last-name">{contact.lastName}</span>
          </h1>
        </div>

        <div className="preview-contact">
          <p>Telephone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>{contact.location}</p>
        </div>
      </div>

      <hr />

      <div className="preview-main">
        <div className="profile-box">
          <h2>Profile</h2>
          <p>{profile}</p>
        </div>

        <div className="box">
          <h2>Education</h2>

          {education.map((study) => (
            <div key={study.id} className="box-content">
              <div className="box-title">
                <h3>{study.institution}</h3>
                <p className="date">
                  {study.startYear} - {study.endYear}
                </p>
              </div>

              <div className="box-info">
                <h3>{study.degree}</h3>
                <p>{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="box">
          <h2>Experience</h2>

          {experience.map((work) => (
            <div key={work.id} className="box-content">
              <div className="box-title">
                <h3>{work.company}</h3>
                <p className="date">
                  {work.startYear} - {work.endYear}
                </p>
              </div>

              <div className="box-info">
                <h3>{work.position}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preview;
