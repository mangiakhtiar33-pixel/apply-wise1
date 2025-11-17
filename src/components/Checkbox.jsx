import React from 'react'

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex w-6 h-6 items-center gap-3 cursor-pointer select-none self-center">
      {/* keep input in DOM with sr-only so peer works */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)} // emit new value
        className="peer sr-only"
        aria-checked={checked}
      />

      <div
        className="
          rounded-xs border border-dark/40
          peer-checked:border-dark peer-checked:bg-dark
          flex items-center justify-center transition-all
        "
        aria-hidden
      >
        <svg
          className="w-[19px] h-[19] text-white opacity-100 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </label>
  )
}

export default Checkbox
