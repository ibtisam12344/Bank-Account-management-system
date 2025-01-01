"use server";

import { redirect } from "next/navigation";
import { createUser, getUser, UpdateAccountInfo } from "./data-services";
import { revalidatePath } from "next/cache";

export async function handleSignUp(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // Simple validation
  if (!name || !email || !password) throw new Error("All fields are required.");

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email))
    throw new Error("Please enter a valid email address.");

  // Password length check
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  // Call signUpUser function
  const { success, message } = await createUser(name, email, password);

  if (success) {
    redirect("/login");
  } else {
    throw new Error(message || "Signup failed. Please try again.");
  }
}
export async function handleLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Simple validation for required fields
  if (!email || !password) {
    throw new Error("Both email and password are required.");
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const User = await getUser(email, password);

  if (User.ok) {
    // Redirect to dashboard if login is successful
    redirect("/dashboard?id=" + User.id);
  } else {
    // If validation fails, throw an error
    throw new Error("Invalid email or password.");
  }
}

export async function handleUpdate(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const id = Number(formData.get("id"));

  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required.");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (password.length <= 6) {
    throw new Error("Password must be greater than 6 characters.");
  }

  // Update the user information in the database
  const { error } = await UpdateAccountInfo(name, email, password, id);

  if (error) {
    throw new Error(`Failed to update user information: ${error.message}`);
  }
  revalidatePath("/dashboard/settings");
}
