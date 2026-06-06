export default function CategoryFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option>All Categories</option>
      <option>Payment Gateway</option>
      <option>Messaging</option>
      <option>Email</option>
      <option>Communication</option>
      <option>API</option>
    </select>
  );
}