import { supabase } from "./supabase";

export async function getUser(email, password) {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    console.error(
      "Error validating user login:",
      error ? error.message : "No user found."
    );
    return { ok: false };
  }

  try {
    if (password !== data.password) {
      console.error("Password does not match.");
      return { ok: false }; // Password is incorrect
    }

    // If everything is fine, return true
    return { ok: true, ...data };
  } catch (err) {
    console.error("Error comparing passwords:", err);
    return false;
  }
}

export async function createUser(name, email, password) {
  try {
    // Insert the new user into the database with the hashed password
    const { data, error } = await supabase
      .from("Users")
      .insert([{ name, email, password }]);

    if (error) {
      console.error("Error signing up user:", error.message);
      return { success: false, message: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, message: "Unexpected error occurred" };
  }
}

export async function getUserData(userId) {
  const { data, error } = await supabase
    .from("UserData") // Replace 'users' with your base table
    .select("*")
    .eq("id", userId)
    .single(); // Filter for the specific user

  if (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }

  return data;
}

export async function getUserRecentTransactions(userId) {
  const { data, error } = await supabase
    .from("recentTransactions")
    .select("*")
    .eq("id", userId);

  if (error) {
    throw new Error(
      `Error fetching user recent transactions: ${error.message}`
    );
  }

  return data;
}
export async function getUserCard(userId) {
  const { data, error } = await supabase
    .from("card")
    .select("*")
    .eq("id", userId);

  if (error) {
    throw new Error(`Error fetching user card: ${error.message}`);
  }

  return data;
}

export async function updateBalance(userId, amount, type) {
  const { data, error } = await supabase
    .from("UserData")
    .update({ balance: amount })
    .eq("id", userId)
    .select();

  if (error) throw new Error(`Could not ${type}`);
}

export async function updateProfile(userId, amount, type) {
  const { error } = await supabase
    .from("Users")
    .update({ balance: amount })
    .eq("id", userId)
    .select();

  if (error) throw new Error(`Could not ${type}`);
}
export async function freezeAccount(userId, isFrozen) {
  const { error } = await supabase
    .from("Users")
    .update({ frozen: isFrozen })
    .eq("id", userId)
    .select();

  if (error) throw new Error(`Could not ${type}`);
}

export async function UpdateAccountInfo(name, email, password, userId) {
  const { data, error } = await supabase
    .from("Users")
    .update({
      name,
      email,
      password,
    })
    .eq("id", userId)
    .select();

  if (error) throw new Error(`Could not update`);
  return { data, error };
}
