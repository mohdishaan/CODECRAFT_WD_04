import weatherImg from '../assets/weather.png';
import HangmanImg from '../assets/hangman.png'
import coinIMG from '../assets/coingecko.png';

function Projects(){
    return (
    <section id="projects" className="px-10 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="border p-5 rounded shadow-sm bg-white">
          <img src={weatherImg} alt="Weather App" className="rounded-lg mb-4 w-full h-48 object-cover" />
          <a href="https://weather-app-9q2t.vercel.app/" target='_blank'><h3 className="text-xl font-semibold text-blue-700">Weather Forecasting Application</h3></a>
          <p className="text-gray-700 mt-2">
            Real-time weather app using advanced meteorological APIs for daily/hourly forecasts.
          </p>
          <a href="https://github.com/mohdishaan/Weather-Application" target='_blank' className="text-blue-600 mt-2 block">View Project</a>
        </div>

        <div className="border p-5 rounded shadow-sm bg-white">
          <img src={HangmanImg} alt="Weather App" className="rounded-lg mb-4 w-full h-48 object-cover" />
          <a href="https://hangman-game-three-lemon.vercel.app/"><h3 className="text-xl font-semibold text-blue-700">Hangman Game Application</h3></a>
          <p className="text-gray-700 mt-2">
            Developed a classic word-guessing game using React functional components and hooks.
          </p>
          
          <a href="https://github.com/mohdishaan/Hangman-Game" target='_blank' className="text-blue-600 mt-2 block">View Project</a>
        </div>

        <div className="border p-5 rounded shadow-sm bg-white">
          <img src={coinIMG} alt="Weather App" className="rounded-lg mb-4 w-full h-48 object-cover" />
          <a href="https://coin-gecko-crypto-tracker-five.vercel.app/"><h3 className="text-xl font-semibold text-blue-700">Real Time Crypto Tracker Application</h3></a>
          <p className="text-gray-700 mt-2">
            Built a responsive cryptocurrency tracking app using React, TanStack Query and DaisyUI for fast, modular UI
            components.
          </p>
          
          <a href="https://github.com/mohdishaan/CoinGeckoCryptoTracker" target='_blank' className="text-blue-600 mt-2 block">View Project</a>
        </div>
      </div>
    </section>
  );
}
export default Projects;