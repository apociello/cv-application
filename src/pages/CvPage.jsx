import './CvPage.css';

function CvPage() {
  return (
    <main className="cv-container">
      <div className="sections">
        <section className="contact">
          <h4>CONTACT</h4>
        </section>

        <section className="languages">
          <h4>LANGUAGES</h4>
        </section>

        <section className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
        </section>

        <section className="education">
          <h4>EDUCATION</h4>
        </section>

        <section className="experience">
          <h4>EXPEREINCE</h4>
        </section>

        <section className="other-info">
          <h4>OTHER INFO</h4>
        </section>
      </div>

      <div className="preview">
        <p>preview</p>
      </div>
    </main>
  );
}

export default CvPage;
