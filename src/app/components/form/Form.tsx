"use client";
import React, { useState, memo } from "react";

type FormProps = {
  handleSubmit: (formData: {
    name: string;
    email: string;
    request: string;
  }) => void;
};

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
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name</label>
      <input
        value={state.name || ""}
        id="name"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        value={state.email || ""}
        id="email"
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <label htmlFor="request">Request</label>
      <input
        value={state.request || ""}
        id="request"
        onChange={(e) => handleInputChange("request", e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
});
