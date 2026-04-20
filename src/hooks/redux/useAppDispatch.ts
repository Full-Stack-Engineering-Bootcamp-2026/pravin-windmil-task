import type { AppDispatch } from "@/store/indexOld";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
