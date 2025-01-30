import { ChevronUpDownIcon } from "@heroicons/react/20/solid"

export function FormSelect({ label, id, name, value, onChange, options }) {
  return (
    <div className="mt-3">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#40251B] sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

