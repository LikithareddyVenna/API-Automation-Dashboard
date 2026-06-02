export default function DateFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option>All Dates</option>
      <option>Today</option>
      <option>Yesterday</option>
      <option>This Week</option>
    </select>
  );
}