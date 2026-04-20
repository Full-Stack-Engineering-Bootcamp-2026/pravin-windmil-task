import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => ({
  getItem: (k:string) => Promise.resolve(null),
  setItem: (k: string, v: any) => Promise.resolve(v),
  removeItem: () => Promise.resolve(),
});
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
export default storage;
