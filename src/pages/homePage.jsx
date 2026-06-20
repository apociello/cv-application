function HomePage({ goToCvPage }) {
  return (
    <main className="home-info">
      <h1>Build Your Professional CV in Minutes</h1>
      <p>Fill in your details, we handle the rest.</p>
      <button onClick={() => goToCvPage(true)}>Create CV</button>
    </main>
  );
}

export default HomePage;
