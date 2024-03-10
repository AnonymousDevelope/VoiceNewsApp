/* eslint-disable react-hooks/rules-of-hooks */
import LogoNews from "../../assets/news_logo.png";
import voiceImg from "../../assets/voice_.png";
import searchImg from "../../assets/search_.png";
import { useNavigate } from "react-router-dom";
import './index.scss'
const index = () => {
  const navigate = useNavigate();
  const redirectRoute = (route) => {
    navigate("/" + route);
  };

  return (
    <div className="dashboard flex flex-col gap-16">
      <h1 className="text-5xl">
        Team Leader : Anonymous Developer (Hayotjon Sultonov)
      </h1>
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-5">
        <section className="relative dashboard-left-section lg:w-1/2 xs:w-1/2 sm:w-full md:w-full flex flex-col gap-5">
          <h1 className="text-5xl">Voice News Finder</h1>
          <h1 className="text-2xl">Dashboard</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            qui officia! Suscipit architecto aliquid eligendi omnis, mollitia
            repellat laborum veniam porro, nam ipsa eaque. Magnam consectetur
            cumque repellat laboriosam sequi ipsum sapiente, culpa nostrum ut
            blanditiis maiores non illo, odio est eaque nemo nulla corporis
            odit! In illum laboriosam soluta rerum pariatur error repudiandae,
            recusandae reiciendis sit, totam consequatur tempore ipsum.
            Voluptatibus obcaecati quae, fugiat autem iusto provident natus.
            Velit ducimus repellendus alias amet? Eius explicabo cupiditate quod
            dolor atque?
          </h2>
          <button
            className="bg-gray-900 absolute bottom-0 left-0 text-white w-[fit-content] rounded-md px-4 mt-14 py-3 text-sm font-medium"
            onClick={() => redirectRoute("voicenews")}
          >
            Get Started
          </button>
          <div className="my_accounts flex align-middle justify-start gap-10">
            <a href="https://t.me/IT_TECHNOLOGY_01" className="text-3xl"><i className="fa fa-telegram"></i></a>
            <a href="javascript:alert('No account')" className="text-3xl"><i className="fa fa-instagram"></i></a>
            <a href="javascript:alert('No account')" className="text-3xl"><i className="fa fa-facebook"></i></a>
            <a href="javascript:alert('No account')" className="text-3xl"><i className="fa fa-github"></i></a>
          </div>
        </section>
        <section className="lg:w-1/2 sm:w-[100%]">
          <img
            src={
              "https://e0.pxfuel.com/wallpapers/137/151/desktop-wallpaper-high-quality-teamwork-full.jpg"
            }
            className="rounded-lg"
            alt=""
          />
        </section>
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse gap-5">
        <section className="lg:w-1/2 rounded-lg sm:w-[100%]">
          <img
            src={
              "https://img.freepik.com/premium-photo/group-special-forces-soldiers-black-uniforms-masks-with-guns-dark-background-armed-special-forces-group-with-shotguns-black-background-face-covered-with-masks-ai-generated_585735-1681.jpg"
            }
            alt=""
            className="rounded-lg xl:w-[100%] xl:h-[100%]"
          />
        </section>
        <section className="dashboard-left-section lg:w-1/2 sm:w-[100%] flex flex-col gap-5">
          <h1 className="text-5xl text-center">Voice News Finder</h1>
          <h1 className="text-2xl text-center">Lorem Ipsum</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            qui officia! Suscipit architecto aliquid eligendi omnis, mollitia
            repellat laborum veniam porro, nam ipsa eaque. Magnam consectetur
            cumque repellat laboriosam sequi ipsum sapiente, culpa nostrum ut
            blanditiis maiores non illo, odio est eaque nemo nulla corporis
            odit! In illum laboriosam soluta rerum pariatur error repudiandae,
            recusandae reiciendis sit, totam consequatur tempore ipsum.
            Voluptatibus obcaecati quae, fugiat autem iusto provident natus.
            Velit ducimus repellendus alias amet? Eius explicabo cupiditate quod
            dolor atque?
          </h2>
          <button
            className="bg-yellow-400 mx-auto text-white w-[fit-content] rounded-md px-4 
          mt-[30px] py-3 text-sm font-medium"
          >
            Get Started
          </button>
          <div className="flex flex-row gap-5 justify-between">
            <section className="flex flex-col w-1/3 bg-gray-900 rounded-md px-3 py-2 items-center">
              <img width={110} src={LogoNews} alt="" />
              <h1 className="text-2xl text-center">News</h1>
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            </section>
            <section className="flex flex-col w-1/3 bg-gray-900 rounded-md px-3 py-2 items-center">
              <img width={85} height={50} src={voiceImg} alt="" />
              <h1 className="text-2xl text-center">Voice</h1>
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            </section>
            <section className="flex flex-col w-1/3 bg-gray-900 rounded-md px-3 py-2 items-center">
              <img width={110} height={50} src={searchImg} alt="" />
              <h1 className="text-2xl text-center">Search</h1>
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
