function Profile({ profile, setProfile }) {
  return (
    <textarea
      value={profile}
      onChange={(e) => setProfile(e.target.value)}
      aria-label="Brief professional summary"
    ></textarea>
  );
}

export default Profile;
