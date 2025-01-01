import User from "./UserClass"; // Import the User class

import { getUserCard as getUserCardFn } from "./data-services";
import { updateBalance as updateBalanceFn } from "./data-services";
import { freezeAccount as freezeAccountFn } from "./data-services";

class Customer extends User {
  // Additional method unique to Customer

  // Add Customer-specific methods
  getUserCard(userId) {
    return getUserCardFn(userId);
  }
  updateBalance(userId, amount, type) {
    return updateBalanceFn(userId, amount, type);
  }
  freezeAccount(userId, isFrozen) {
    return freezeAccountFn(userId, isFrozen);
  }
}

export default Customer;
