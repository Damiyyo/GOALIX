const MobileMenu = () => {
    return (
      <div
        className="
          fixed left-0 top-0 z-50 h-screen w-[75%]
          border-r border-zinc-800 bg-zinc-950 p-6
          md:hidden
        "
      >
        <div className="space-y-6">
          <p className="text-white">Home</p>
          <p className="text-white">Predictions</p>
          <p className="text-white">Leagues</p>
          <p className="text-white">Scores</p>
          <p className="text-white">News</p>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;