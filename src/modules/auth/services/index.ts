import Api from "@/api";

export const signIn = async (payload: any) => {
  return Api.post("/auth/users/", payload).then((res) => res.data);
};

export const register = async (payload: any) => {
  return Api.post("/auth/users/register", payload).then((res) => res.data);
};
