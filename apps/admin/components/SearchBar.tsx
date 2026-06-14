interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={
        placeholder ?? "Search..."
      }
      className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
    />
  );
}