export default function EmptyState({
  title,
  message,
}) {
  return (
    <div className="py-10 text-center text-gray-500">

      <h3 className="text-lg font-semibold text-gray-700">
        {title}
      </h3>

      <p className="mt-1">
        {message}
      </p>

    </div>
  );
}