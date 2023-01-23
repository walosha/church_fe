import Api from "@/api";

export const signIn = async (payload: any) => {
  return Api.post("/auth/users/", payload).then((res) => res.data);
};
