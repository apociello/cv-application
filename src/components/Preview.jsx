function Preview({ contact, profile, education, experience }) {
  return (
    <div className="preview">
      <div className="preview-header">
        <div className="preview-name">
          <h1>{contact.firstName}</h1>
          <h1>{contact.lastName}</h1>
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
            <div key={study.degree} className="box-content">
              <div className="box-title">
                <h4>{study.institution}</h4>
                <p className="date">
                  {study.startYear} - {study.endYear}
                </p>
              </div>

              <div className="box-info">
                <h4>{study.degree}</h4>
                <p>{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="box">
          <h2>Experience</h2>

          {experience.map((work) => (
            <div key={work.position} className="box-content">
              <div className="box-title">
                <h4>{work.company}</h4>
                <p className="date">
                  {work.startYear} - {work.endYear}
                </p>
              </div>

              <div className="box-info">
                <h4>{work.position}</h4>

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
