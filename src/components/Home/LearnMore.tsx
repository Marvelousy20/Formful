const LearnMore = () => {
  return (
    <div className="py-20 font-poppins">
      <h3 className="text-[3.6rem] text-[#332DCC] mb-1">
        Interested in learning more?
      </h3>

      <p className="text-xl text-[#141414] max-w-[37rem] leading-[35px] mb-4">
        Sign up for our wait list, our first big launch date will be at
        EthDenver!
      </p>

      <div>
        <input
          type="email"
          required
          placeholder="Enter Email here"
          className="text-[#332DCC] mr-3 border border-[#3F1651] outline-none px-3 py-2 rounded-[10px]"
        />
        <button className="bg-[#332DCC] px-3 py-2 text-white rounded-[10px] hover:bg-opacity-80 ease-in-out">
          Signup
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
