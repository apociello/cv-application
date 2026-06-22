import './CvPage.css';

function CvPage() {
  return (
    <main className="cv-container">
      <div className="sections">
        <section className="contact">
          <h4>CONTACT</h4>
          
          <div className="form-line">
            <label htmlFor="first-name">First Name</label>
            <input id='first-name' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="last-name">Last Name</label>
            <input id='last-name' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="telephone">Telephone</label>
            <input id='telephone' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="email">Email</label>
            <input id='email' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="location">Location</label>
            <input id='location' type="text" />
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
            <input id='institution' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="degree">Degree</label>
            <input id='degree' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="start-year">Start Year</label>
            <input id='start-year' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="end-year">End Year</label>
            <input id='end-year' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="description">Description</label>
            <input id='description' type="text" />
          </div>

        </section>

        <section className="experience">
          <h4>EXPEREINCE</h4>

          <div className="form-line">
            <label htmlFor="company">Company</label>
            <input id='company' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="position">Position</label>
            <input id='position' type="text" />
          </div>

           <div className="form-line">
            <label htmlFor="start-year">Start Year</label>
            <input id='start-year' type="text" />
          </div>

          <div className="form-line">
            <label htmlFor="end-year">End Year</label>
            <input id='end-year' type="text" />
          </div>

           <div className="form-line">
            <label htmlFor="description">Description</label>
            <input id='description' type="text" />
          </div>
        </section>
      </div>

      <div className="preview">
        <div className="preview-header">
          <div className="preview-name">
            <h1>Ethan</h1>
            <h1>Carter</h1>
          </div>

          <div className="preview-contact">
            <p>telephone: +1 (617) 555-2847</p>
            <p>email: ethan.carter.dev@gmail.com</p>
            <p>Boston, USA</p>
          </div>
        </div>

        <hr />

        <div className="preview-main">
          <div className="profile-box">
            <h2>Profile</h2>

            <p>
              Backend-focused software engineer with a strong foundation in
              distributed systems and software architecture. Experienced in
              designing scalable services and solving complex technical
              challenges, with a continuous drive to learn and apply new
              technologies.
            </p>
          </div>

          <div className="box">
            <h2>Education</h2>
            <div className="box-content">
              <div className="box-title">
                <h4>Boston University</h4>
                <p className="date">2017 - 2020</p>
              </div>

              <div className="box-info">
                <h4>Bachelor of Software Engineering</h4>
                <p>
                  Studied software development, databases, algorithms and
                  computer systems.
                </p>
              </div>
            </div>

            <div className="box-content">
              <div className="box-title">
                <h4>Rice University</h4>
                <p className="date">2020 - 2022</p>
              </div>

              <div className="box-info">
                <h4>MSc Software Architecture & Distributed Systems</h4>
                <p>
                  Specialized in large-scale system design, microservices
                  architecture, concurrency, distributed computing, and
                  performance optimization of backend systems.
                </p>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Experience</h2>
            <div className="box-content">
              <div className="box-title">
                <h4>Nova Tech Solutions</h4>
                <p className="date">2022 - 2023</p>
              </div>

              <div className="box-info">
                <h4>Software Engineer Intern</h4>

                <p>
                  Built internal tools using React and Node.js, assisted in
                  migrating legacy services to a microservices architecture, and
                  gained hands-on experience with distributed systems concepts.
                </p>
              </div>
            </div>

            <div className="box-content">
              <div className="box-title">
                <h4>Bright Path Systems</h4>
                <p className="date">2023 - Present</p>
              </div>

              <div className="box-info">
                <h4>Backend Engineer</h4>

                <p>
                  Designed and maintained scalable backend services using Java
                  and Spring Boot, optimized system performance under high load,
                  and collaborated on the migration to a distributed
                  microservices architecture across multiple teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CvPage;
