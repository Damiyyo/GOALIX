interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <main
      className="
        relative flex min-h-screen
        w-full overflow-hidden
        bg-white
      "
    >
      {/* LEFT IMAGE SIDE */}
      <div
        className="
          relative hidden h-screen
          w-[55%] overflow-hidden
          lg:block
        "
        style={{
          clipPath:
            "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* Background Image */}
        <img
          src="/newsPics/sakaReg.jpg"
          alt="Football"
          className="
            h-full w-full object-cover
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute inset-0 bg-black/45
          "
        />

        {/* Content */}
        <div
          className="
            absolute inset-0 z-10
            flex flex-col justify-end
            p-16
          "
        >
          <p
            className="
              text-sm font-semibold uppercase
              tracking-[0.25em]
              text-zinc-300
            "
          >
            Welcome To Goalix
          </p>

          <h1
            className="
              mt-5 text-6xl font-black
              leading-tight text-white
            "
          >
            Football
            <br />
            Starts Here.
          </h1>

          <p
            className="
              mt-6 max-w-md text-lg
              leading-8 text-zinc-200
            "
          >
            Access live scores, football insights,
            predictions and match analysis
            from leagues around the world.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SIDE */}
      <div
        className="
          flex min-h-screen
          w-full items-center
          justify-center bg-white
          px-6 py-14
          lg:w-[45%]
          lg:px-20
        "
      >
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
