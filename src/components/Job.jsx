function Job({ job, experience, setExperience }) {
  return (
    <div className="job">
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
          type="number"
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
        />
      </div>

      <div className="trash-div">
        <button
          onClick={() =>
            setExperience(experience.filter((job2) => job2.id != job.id))
          }
          aria-label="Delete experience entry"
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

export default Job;
