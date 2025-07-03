'use client';
export default function Button({ children, type = 'primary', ...props }) {
  return (
    <button className={`btn btn-${type}`} {...props}>
      {children}
    </button>
  );
}
