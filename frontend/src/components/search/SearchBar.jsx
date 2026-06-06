export default function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-80 border rounded-lg px-4 py-2"
    />
  );
}