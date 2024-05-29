"use client";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border border-gray-400 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
