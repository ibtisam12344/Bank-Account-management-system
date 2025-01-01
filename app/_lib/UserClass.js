import { createUser as createUserFn } from "./data-services";
import { getUser as getUserFn } from "./data-services";
import { updateProfile as updateProfileFn } from "./data-services";
import { getUserData as getUserDataFn } from "./data-services";
import { getUserRecentTransactions as getUserRecentTransactionsFn } from "./data-services";

class User {
  // Class methods
  createUser(name, email, password) {
    return createUserFn(name, email, password); // Delegate to the imported createUser function
  }

  getUser(email, password) {
    return getUserFn(email, password); // Delegate to the imported getUser function
  }

  updateProfile(userId, amount, type) {
    return updateProfileFn(userId, amount, type); // Delegate to the imported updateProfile function
  }

  getUserData(userId) {
    return getUserDataFn(userId); // Delegate to the imported getUserData function
  }

  getUserRecentTransactions(userId) {
    return getUserRecentTransactionsFn(userId);
  }
}

export default User;
