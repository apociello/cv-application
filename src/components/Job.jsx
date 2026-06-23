function Job({ job, experience, setExperience }) {
  return (
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
  );
}

export default Job;
