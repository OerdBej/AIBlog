const HomePage = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-center text-white px-4">
        Slow Journal for learning
      </h2>
      <p className="text-xl text-gray-200 text-center">
        Write to learn - learn to build
      </p>
      <section className="grid grid-cols-2 place-items-center gap-6">
        <figure className="w-36">
          <h3>Picture 1</h3>
        </figure>
        <figure className="w-36">
          <h3>Picture 2</h3>
        </figure>
        <figure className="w-36">
          <h3>Picture 3</h3>
        </figure>
        <figure className="w-36">
          <h3>Picture 4</h3>
        </figure>
      </section>
    </>
  );
};

export default HomePage;
