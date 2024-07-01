import Profile from "../assets/Profile.jpg";

function Homepage() {
  return (
    <div className=" w-full h-screen bg-slate-900 pt-10 flex flex-col-reverse justify-center items-center lg:grid lg:grid-cols-[auto_auto] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-y-[2rem] animate-fade-in">
        <p className="text-red-400 text-xl sm:text-4xl">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-200">
          Sriraj Uppalapati
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-500">
          I am a fullstack developer.
        </h2>
        <p className="text-slate-600 py-4 max-w-[800px]">
          I am a fullstack developer specializing in mern stack development with
          various other frameworks.
        </p>
      </div>
      <div className="mx-auto px-8">
        <img
          style={{ animation: "fade-in 3s" }}
          src={Profile}
          alt="Sriraj"
          className="border-red-400 rounded-full border-4 h-[200px] w-[200px] animate-fade-in"
        />
      </div>
    </div>
  );
}

export default Homepage;
