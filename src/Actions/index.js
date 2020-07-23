export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_ORDERS = "GET_ORDERS";
export const ADD_ORDER = "ADD_ORDER";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const UPDATE_USERS = "UPDATE_USERS";
export const GET_USERS = "GET_USERS";
export const CHANGE_USER = "CHANGE_USER";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_STATUS = "CHANGE_STATUS";

export function addOrder(order) {
  console.log("action hit");
  console.log(order);
  const action = {
    type: ADD_ORDER,
    order
  };
  return action;
}

export function addProducts(products) {
  console.log("Add Products Action");
  console.log(products);
  const action = {
    type: ADD_PRODUCTS,
    products
  };
  return action;
}

export const getProducts = () => ({
  type: GET_PRODUCTS,
})

export const getOrders = () => ({
  type: GET_ORDERS,
})

export const getUsers = () => ({
  type: GET_USERS,
})

export function changeUserName(username) {
  const action = {
    type: CHANGE_USER,
    username
  }
  return action;
}

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password
})

export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  status
})


export function updateUserStatus(status) {
  const action = {
    type: UPDATE_USERS,
    status
  }
  return action;
}
