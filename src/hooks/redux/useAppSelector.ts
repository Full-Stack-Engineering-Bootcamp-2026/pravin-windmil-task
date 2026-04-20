import type { RootState } from "@/store/indexOld";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

import {} from "@reduxjs/toolkit";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
