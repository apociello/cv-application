function Profile({ profile, setProfile }) {
  return (
    <textarea
      value={profile}
      onChange={(e) => setProfile(e.target.value)}
      name=""
      id=""
    ></textarea>
  );
}

export default Profile;
