"use client";

import { useCallback } from "react";
import { Form } from "./components/form";
import { createUser, User } from "./lib/utils";

const Page = () => {
  const handleSubmit = useCallback(async (formData: User) => {
    createUser(formData);
    console.log("User created sucessfully");
  }, []);
  return <Form handleSubmit={handleSubmit} />;
};
export default Page;
