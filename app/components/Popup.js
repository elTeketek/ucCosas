'use client';
export default function Popup({ title, children }) {
  return (
    <div className="popup bg-white p-2 shadow">
      <h5>{title}</h5>
      <div>{children}</div>
    </div>
  );
}
