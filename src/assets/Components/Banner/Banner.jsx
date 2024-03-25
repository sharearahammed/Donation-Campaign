import './Banner.css'

const Banner = () => {
  return (
    <div className="h-[450px] relative mt-[120px] flex flex-col justify-center items-center">
      <div className="absolute inset-0 background bg-cover bg-center bg-no-repeat opacity-10"></div>
      <h1 className="relative mb-[48px] text-[48px] font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Search here...."
          className="p-3 rounded-r-none rounded-lg border border-blue-gray-50 w-full max-w-xs"
        />
        <button className="p-3 bg-red-500 text-white h-[50px] w-[110px] rounded-l-none rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
