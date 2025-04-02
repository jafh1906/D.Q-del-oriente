export const Hero = () => {
  return (
    <section className="flex m-auto min-h-screen w-full justify-around mt-10">
      <div className="flex justify-between container mx-auto  gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl">
            Want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="text-gray-400">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <div className="flex gap-5 mt-3">
            <button className="bg-[#00AEEE] py-2 px-10 rounded-lg text-white font-bold shadow-[#00AEEE]/40 shadow-lg">
              Productos
            </button>
            <button>Saber mas</button>
          </div>
        </div>
        <div className="flex flex-center h-[382px] w-[611px]">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
