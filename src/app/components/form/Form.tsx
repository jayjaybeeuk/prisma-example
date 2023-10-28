import { User } from "@/app/lib/utils";
import React, { useState, memo } from "react";

export interface FormProps {
  handleSubmit: (formData: User) => void;
}

export const Form = memo(({ handleSubmit }: FormProps) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    request: "",
  });
  const handleInputChange = (field: string, value: string) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, request } = state;
    const formData = { name, email, request };
    // Call the onSubmit function passed from the parent component
    handleSubmit(formData);
  };
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmitForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state.name || ""}
            id="name"
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state.email || ""}
            id="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="request"
          >
            Request
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state.request || ""}
            id="request"
            onChange={(e) => handleInputChange("request", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
});
