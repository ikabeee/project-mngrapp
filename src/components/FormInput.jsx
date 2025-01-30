import { ExclamationCircleIcon } from "@heroicons/react/20/solid"

export function FormInput({ label, id, name, type = "text", value, onChange, error }) {
  return (
    <div className="">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative  rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-md border-0 py-1.5 px-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
            error
              ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              : "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-[#40251B]"
          }`}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

