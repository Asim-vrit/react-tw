import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfigs";

export async function fetchProducts() {
  try {
    const res = await fetch(API_BASE_URL + "/productsasdasd");
    if (!res.ok) {
      console.log("error code", res.status);
      throw new Error("something went wrong");
    }
    console.log("success code", res.status);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
export async function postProduct(reqData) {
  try {
    const res = await fetch(API_BASE_URL + "/products", {
      method: "POST",
      body: JSON.stringify(reqData),
      headers: { "Content-type": "Application/json" },
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchProductsAxios() {
  try {
    const data = axios({ method: "get", url: API_BASE_URL + "/products" });
    return data;
  } catch (e) {
    console.error(e);
  }
}
export async function postProductAxios(reqData) {
  try {
    const data = await axios({ method: "post", data: reqData });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function patchProduct(reqData) {
  try {
    const res = await fetch(API_BASE_URL + "/products", {
      method: "PATCH",
      body: JSON.stringify(reqData),
      headers: { "Content-type": "Application/json" },
    });
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteProduct(reqData) {
  try {
    const res = await fetch(API_BASE_URL + "/products", {
      method: "DELETE",
      body: JSON.stringify(reqData),
      headers: { "Content-type": "Application/json" },
    });
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
