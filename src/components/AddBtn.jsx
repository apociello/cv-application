function AddBtn({ onClick, label }) {
  return (
    <button onClick={onClick} aria-label={label}>
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
  );
}

export default AddBtn;
