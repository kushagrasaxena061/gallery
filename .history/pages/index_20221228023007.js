const Home = () => {
  return (
    <div>
      <div className="  text-white text-5xl font-bold rounded-lg w-[17.5rem] h-[1rem]">
        <img src="/images/images/apna_bana_le.jpg" alt="no" />
        <div className="bg-black">
          {" "}
          <audio controls className="bg-black p-0 ml-32" src="/images/images/apna_bana_le.mp3" />
        </div>
      </div>
      <div className=" text-white text-5xl font-bold rounded-lg w-[17.5rem] h-[1rem]">
        <img src="/images/images/phto.jpg" alt="no" />
        <div className="bg-black">
          {" "}
          <audio controls className="bg-black p-0 ml-32" src="/images/images/song.mp3" />
        </div>
      </div>
      <div className="  text-white text-5xl font-bold rounded-lg w-[17.5rem] h-[1rem]">
        <img src="/images/images/phto.jpg" alt="no" />
        <div className="bg-black">
          {" "}
          <audio controls className="bg-black p-0 ml-32" src="/images/images/song.mp3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
