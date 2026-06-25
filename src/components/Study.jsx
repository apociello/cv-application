function Study({ study, education, setEducation }) {
  return (
    <div className="study">
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
          type="number"
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
        />
      </div>

      <div className="trash-div">
        <button
          onClick={() =>
            setEducation(education.filter((study2) => study2.id != study.id))
          }
          aria-label="Delete education entry"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M75.834,33.388h-51.67c-1.311,0-2.375,1.058-2.375,2.373v49.887c0,1.314,1.064,2.377,2.375,2.377h51.67 c1.314,0,2.375-1.063,2.375-2.377V35.76C78.209,34.446,77.148,33.388,75.834,33.388z" />
            <path d="M79.004,17.352H59.402v-2.999c0-1.314-1.061-2.377-2.373-2.377H42.971c-1.312,0-2.375,1.063-2.375,2.377v2.999H20.996 c-1.312,0-2.375,1.059-2.375,2.373v6.932c0,1.314,1.063,2.373,2.375,2.373h58.008c1.314,0,2.375-1.059,2.375-2.373v-6.932 C81.379,18.41,80.318,17.352,79.004,17.352z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Study;
