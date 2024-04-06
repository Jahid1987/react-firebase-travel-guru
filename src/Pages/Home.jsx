import coxbazar from "../assets/Rectangle_1.png";
import srimongol from "../assets/Sreemongol.png";
import sundorbon from "../assets/sundorbon.png";
import Nav from "../componets/Nav";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const Home = () => {
  return (
    <div
      className="hero min-h-screen text-white "
      style={{
        backgroundImage: `url(${coxbazar})`,
      }}
    >
      <div className=" hero-overlay bg-opacity-70"></div>
      <Nav></Nav>
      {/* banner container  */}
      <div className=" relative overflow-hidden  grid items-center gap-6 p-4 grid-cols-5 max-w-[1440px] mx-auto ">
        {/* left side message  */}
        <div className="col-span-2 h-[450px] grid place-content-center">
          <h3 className="xl:text-8xl lg:text-6xl text-white">Coxs bazar</h3>
          <p className="text-gray-400 h-auto">
            Coxs Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ... lore
          </p>
        </div>

        {/* slide showing  */}
        <div className=" absolute left-[50%] h-[450px] flex gap-3 col-span-3 w-auto">
          <div className="w-[270px] h-[416px] rounded-lg border-[5px] border-yellow-600">
            <img
              className="object-cover h-full rounded-lg"
              src={coxbazar}
              alt=""
            />
          </div>
          <div className="w-[270px] h-[416px] rounded-lg border ">
            <img
              className="object-cover h-full rounded-lg"
              src={srimongol}
              alt=""
            />
          </div>
          <div className=" w-[270px] h-[416px] rounded-lg border">
            <img
              className="object-cover h-full rounded-lg"
              src={sundorbon}
              alt=""
            />
          </div>
          <div className="flex-grow w-[270px] h-[416px] rounded-lg border">
            <img
              className="object-cover h-full rounded-lg"
              src={sundorbon}
              alt=""
            />
          </div>
        </div>

        <div className="absolute left-[50%] bottom-0 space-x-2">
          <button className="btn btn-circle btn-outline bg-white">
            <FaAngleLeft />
          </button>
          <button className="btn btn-circle btn-outline bg-white">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
