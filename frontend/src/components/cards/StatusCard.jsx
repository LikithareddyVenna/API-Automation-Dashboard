import { TrendingUp } from "lucide-react";
export default function StatusCard({
  title,
  value,
  growth,
  icon: Icon,
  iconBg,
}) {
  return (
    <div
      className="
      group
      bg-white
      p-6
      rounded-2xl
      border
      border-gray-100
      shadow-sm
      transition-all
      duration-300
      cursor-pointer
      hover:shadow-lg
      hover:-translate-y-1
      hover:scale-[1.02]
    "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-gray-500 text-sm font-medium">
          {title}
        </h2>

        <div
          className={`
            p-3
            rounded-xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            ${iconBg}
          `}
        >
          <Icon size={20} />
        </div>

      </div>

      <p className="text-3xl font-bold mt-3 text-slate-800">
        {value}
      </p>

      <div className="flex items-center gap-2 mt-3">

        <div className="
          flex
          items-center
          gap-1
          px-2.5
          py-1
          rounded-full
          bg-green-100
          text-green-600
          text-xs
          font-semibold
        ">
          <TrendingUp size={14} />
          {growth}
        </div>

        <p className="text-sm text-slate-500">
         vs last month
        </p>

    </div>

    </div>
  );
}