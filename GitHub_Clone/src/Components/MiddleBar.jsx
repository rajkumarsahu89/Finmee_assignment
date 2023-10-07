import { BsFilter } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { BiSolidDownArrow } from "react-icons/bi";
import RightSidebar from "./RightSidebar";
import { BsGithub } from "react-icons/bs";

const MiddleBar = () => {
  return (
    <>
      <div className="w-[70%]    px-8 py-4 ">
        <div className="flex justify-between ">
          <p>Home</p>
          <div className="flex gap-2 items-center">
            <p className="text-[#0D3DD3] hover:border-b-2 border-b-[#0D3DD3]">
              Send feedback
            </p>
            <button className="flex items-center gap-2 border border-slate-500 bg-slate-800 px-4 py-1 rounded-md">
              <BsFilter />
              <p>Filter</p>
              <div>
                <p className="text-sm">8</p>
              </div>
            </button>
          </div>
        </div>

        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9"
              src="https://avatars.githubusercontent.com/u/105925871?v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">AlpasShrivastava </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>

          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">6 hours ago</p>
          </div>

          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4"
                src="https://avatars.githubusercontent.com/u/105925871?s=40&v=4"
                alt=""
              />
              <p className="text-sm">AlpasShrivastava/TimeLine_Mern</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-yellow-400"></div>
            <p className="text-xs">JavaScript</p>
          </div>
        </div>

        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/105806651?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">codersudhir </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          {/* time */}
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">8 hours ago</p>
          </div>
          {/* last */}
          <div className="flex justify-between px-4 pt-5  relative">
            <div className="flex items-center gap-2">
              <img
                className="w-11 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/105806651?s=80&v=4"
                alt=""
              />
              <div className="flex gap-2">
                <p className="text-sm">Sudhir Nandane</p>
                <span className="text-sm text-slate-500">codersudhir</span>
              </div>
            </div>
            <button className="  border-slate-500  bg-slate-800 px-3  rounded-md">
              <p className="text-xs">Follow</p>
            </button>
          </div>
          <p className="text-sm mt-2 px-[12%] absolute top-24 ">
            codersudhir/Bookapp
          </p>
          <div className="flex px-[12.5%] text-sm mt-2 gap-4 text-slate-500">
            <p>25 repositories </p>
            <p>90 followers</p>
          </div>
        </div>

        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/49101548?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">Ephantuz </p>
                <span className="text-sm text-slate-500">
                  followed
                  1 users
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
         
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">15 hours ago</p>
          </div>
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/49101548?s=80&v=4"
                alt=""
              />
              <p className="text-sm">
                encrypt-firm/.github</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-yellow-400"></div>
            <p className="text-xs">JavaScript</p>
          </div>
        </div>
       
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/105972503?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">Bhairav001 </p>
                <span className="text-sm text-slate-500">
                  made this repository public
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
         
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">11 hours ago</p>
          </div>
        
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
              <img
                className="w-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/105972503?s=80&v=4"
                alt=""
              />
              <p className="text-sm">Bhairav001/meanbuy</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
              <div className="text-slate-500">
                <PiStarThin />
              </div>
              <p className="text-xs ">Star</p>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">|</p>
                  <div className="text-xs">
                    <BiSolidDownArrow />
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2 px-5 pb-3">
            <div className=" w-3 h-3 rounded-[50%] bg-yellow-400"></div>
            <p className="text-xs">JavaScript</p>
          </div>
        </div>
        <div className="border border-slate-500 rounded-md p-4 relative bg-[#161B22] mt-4">
          <div className="flex gap-2 ">
            <img
              className="w-9 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/105972503?s=80&v=4"
              alt=""
            />
            <div className="flex justify-between  w-[100%]">
              <div className="flex gap-2">
                <p className="text-sm">Shikha Gupta   </p>
                <span className="text-sm text-slate-500">
                  followed
                  1 users
                </span>
              </div>
              <p>...</p>
            </div>
          </div>
          <div className="flex gap-2 absolute top-9 left-11">
            <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">
              <img
                className="w-6"
                src="https://github.githubassets.com/images/icons/feeds/feed-public.svg"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500">22 hours ago</p>
          </div>
          <div className="flex justify-between px-4 pt-5  relative">
            <div className="flex items-center gap-2">
              <img
                className="w-11 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/106536749?s=96&v=4"
                alt=""
              />
              <div className="flex gap-2">
                <p className="text-sm">Meenakshi Arora  </p>
                <span className="text-sm text-slate-500"> meenakshiar</span>
              </div>
            </div>
            <button className="  border-slate-500  bg-slate-800 px-3  rounded-md">
              <p className="text-xs">Follow</p>
            </button>
          </div>
          <p className="text-sm mt-2 px-[12%] absolute top-24 ">
          A full stack web developer with a keen eye for detail and a passion for creating bug-free, visually appealing, and secure web applications.
          </p>
          <div className="flex px-[12.5%] text-sm mt-8 gap-4 text-slate-500">
            <p>13 repositories </p>
            <p>120 followers</p>
          </div>
        </div>

        <button className="border w-[100%] mt-2 rounded-md py-1 bg-[#161B22] mt-4  text-[#2F81EA] border-slate-500">
          More
        </button>
        <div className="flex text-xs  text-slate-500 gap-[30%] mt-3">
          <div className="flex gap-2 ">

            <div className="w-3">
              <BsGithub />
            </div>
            <p>@2023 Github,Inc</p>
          </div>
          <div className="flex gap-6">
            <div>
              <ul>
                <li>Blog</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Github</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <ul>
                <li> API</li>
                <li>Training</li>
                <li>Status</li>
                <li>Security</li>
                Docs
              </ul>
            </div>
            <div>
              <ul>
                <li> Terms</li>
                <li>Privacy</li>
                <li>Docs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] ">
        <RightSidebar/>
      </div>
    </>
  );
};

export default MiddleBar;
