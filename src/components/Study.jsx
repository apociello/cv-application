function Study({ study, education, setEducation }) {
  return (
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
  );
}

export default Study;
