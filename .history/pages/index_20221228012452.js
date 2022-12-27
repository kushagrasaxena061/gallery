const Home = () => {
  return (
    <div>
      <div className=" hover:scale-110 text-white text-5xl font-bold rounded-lg w-[17.5rem] h-[1rem]">
        <img src="/images/images/phto.jpg" alt="no" />
        <div className="bg-black">
          {" "}
          <audio controls className="bg-black p-0" src="/images/images/song.mp3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
