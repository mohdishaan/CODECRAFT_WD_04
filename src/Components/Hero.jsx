import profileIMG from '../assets/profile.jpg';

function Hero(){
    return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
      <div className="md:w-1/2 space-y-4">
        <p className="text-blue-600">Welcome!</p>
        <h2 className="text-4xl font-bold">I'm <span className="text-blue-800">Mohammad Ishaan</span></h2>
        <h3 className="text-xl">Full Stack Web Developer | B.Tech CSE Student</h3>
        <p>
          Motivated and detail-oriented developer with skills in React, Tailwind CSS, Frontend and backend technologies. 
          Passionate about building scalable and user-friendly web solutions.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/mohammad-ishaan-42076b309/" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">LinkedIn</a>
          <a href="https://github.com/mohdishaan" target="_blank" rel="noreferrer" className="border border-blue-600 px-4 py-2 rounded-full font-semibold">GitHub</a>
        </div>
      </div>
      <img src={profileIMG} alt="Profile" className="w-120 mt-10 md:mt-0 rounded-lg shadow-lg" />
    </section>
  );
}

export default Hero;