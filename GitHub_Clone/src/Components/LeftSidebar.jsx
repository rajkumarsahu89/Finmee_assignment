import { BiSolidDownArrow } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
const LeftSidebar = () => {
  return (
    <div className="">
      <div className="absolute  left-0 w-[100%] max-h-[100vh] overflow-y-auto bg-[#0D1117] rounded-lg shadow-lg">

        <div className="p-5 text-white">
          <div className="flex items-center gap-2">
            <img
              className="w-8 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/106021391?v=4"
              alt=""
            />

            <p>rajkumarsahu89</p>
            <div>
              <BiSolidDownArrow />
            </div>
          </div>
          {/* 2nd */}
          <div className="flex justify-between mt-3">
            <p>Top Repositories</p>
            <button className="flex items-center gap-2 bg-[#238636] py-1 px-2 rounded-md">
              <GoRepo />
              <p>New</p>
            </button>
          </div>
          {/* input */}
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-3"
          />

          <ul className="mt-3">
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-4 h-4"
                src="https://avatars.githubusercontent.com/u/61222534?s=16&v=4"
                alt=""
              />
              <p className="text-sm">masai-course/RAJKUMAR_fw19_0628</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/106021391?v=4"
                alt=""
              />
              <p className="text-sm">rajkumarsahu89/Todo-React</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-4 h-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/106021391?v=4"
                alt=""
              />
              <p className="text-sm">rajkumarsahu89/Zara-clone</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/107476738?v=4"
                alt=""
              />
              <p className="text-sm">pallavijainy/closed-minute-1314</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-4 h-4 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/106021391?v=4"
                alt=""
              />
              <p className="text-sm">rajkumarsahu89/rajkumarsahu89.github.io</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/101376314?v=4"
                alt=""
              />
              <p className="text-sm">gouseimmu/Adorama-Clone</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/106021391?v=4"
                alt=""
              />
              <p className="text-sm">rajkumarsahu89/Furation_Bookstore</p>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/u/103637119?v=4"
                alt=""
              />
              <p className="text-sm">mhtbansal11/Meesho-fascino</p>
            </li>

            <li className="text-xs text-slate-500 my-4">show more</li>

          </ul>
          {/* 4th */}
          <p className="mb-2">Recent activity</p>
          <div className="border-dashed border-2 border-slate-500 text-slate-500 rounded-md p-3 ">
            <p className="text-xs">
              When you take actions across GitHub, we’ll provide links to that
              activity here.
            </p>
          </div>
          {/* 5th */}
          <p className="mt-2">Your teams</p>
          <input
            type="text"
            placeholder="Find a teams..."
            className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-2"
          />
          {/* 6th */}
          <ul>
            <li className="flex items-center gap-2 mt-3">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/t/6256690?s=16&v=4"
                alt=""
              />
              <p className="text-sm">masai-course/cohort-36</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
