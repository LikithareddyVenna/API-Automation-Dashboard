export default function SkeletonLoader() {
  return (
    <div className="animate-pulse">

      <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>

      <div className="space-y-4">

        <div className="h-12 bg-gray-200 rounded"></div>

        <div className="h-12 bg-gray-200 rounded"></div>

        <div className="h-12 bg-gray-200 rounded"></div>

        <div className="h-12 bg-gray-200 rounded"></div>

      </div>

    </div>
  );
}