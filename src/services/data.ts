import { type Comments, type User } from "../types/api";

const URL = "http://localhost:4321/data.json";

const getAllComments = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const data = response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      let message = error.message || "Ocurrió un error";
      return message;
    }
  }
};

export const getCommentsByUser = async () => {
  const response = await getAllComments();
  return response as Comments;
};
