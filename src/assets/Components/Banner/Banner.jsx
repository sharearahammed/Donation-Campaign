import './Banner.css'

const Banner = ({setValue,handleSearch}) => {
  return (
    <div className="h-[450px] relative mt-[120px] flex flex-col justify-center items-center">
      <div className="absolute inset-0 background bg-cover bg-center bg-no-repeat opacity-10"></div>
      <div className='relative flex flex-col justify-center items-center'>
      <h1 className=" mb-[48px] text-[48px] font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="flex">
        <input
        onChange={(e)=>setValue(e.target.value)}
          type="text"
          placeholder="Search here...."
          className="p-3 rounded-r-none rounded-lg border border-blue-gray-50 w-full max-w-xs"
        />
        <button onClick={handleSearch} className="p-3 bg-red-500 text-white h-[50px] w-[110px] rounded-l-none rounded-lg">
          Search
        </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
