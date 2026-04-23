// services/characterApi.ts
import { api } from "./axiosInstance";
import type { CharacterResponse } from "@/types/characterResponseType";

export const fetchCharacters = async (
  page: number
): Promise<CharacterResponse> => {
  const response = await api.get(`/character?page=${page}`);
  return response.data;
};