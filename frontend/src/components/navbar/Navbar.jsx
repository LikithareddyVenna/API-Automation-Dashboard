export default function Navbar() {
  return (
    <div className="
      h-16
      bg-white/80
      backdrop-blur-md
      border-b
      border-gray-100
      flex
      items-center
      justify-between
      px-6
      sticky
      top-0
      z-50
    ">

      {/* Left */}
      <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
        Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="
            w-72
            bg-white
            border
            border-gray-200
            rounded-xl
            px-4
            py-2
            text-sm
            outline-none
            transition-all
            duration-300
            focus:ring-4
            focus:ring-indigo-100
            focus:border-indigo-400
            placeholder:text-slate-400
          "
        />

        <div className="flex items-center gap-3">

          <div className="text-right hidden sm:block">

            <p className="text-sm font-semibold text-slate-900">
              Likitha
            </p>

            <p className="text-xs text-slate-500">
              Senior Engineer
            </p>

          </div>

          <div className="
            w-11
            h-11
            rounded-full
            bg-gradient-to-br
            from-indigo-500
            to-purple-500
            text-white
            flex
            items-center
            justify-center
            font-semibold
            shadow-lg
            shadow-indigo-500/20
            ">
              L
          </div>

        </div>

      </div>

    </div>
  );
}