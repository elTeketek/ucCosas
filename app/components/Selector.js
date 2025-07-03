'use client';
export default function Selector({ options, value, onChange }) {
  return (
    <select className="form-control" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
