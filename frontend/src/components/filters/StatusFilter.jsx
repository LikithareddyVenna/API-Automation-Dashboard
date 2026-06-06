
export default function StatusFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option>All Status</option>
      <option>Success</option>
      <option>Failed</option>
      <option>Running</option>
      <option>Connected</option>
      <option>Not Connected</option>
    </select>
  );
}