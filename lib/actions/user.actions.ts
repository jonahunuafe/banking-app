"use server";

import { createSessionClient } from "../appwrite";

export const signIn = async () => {
  try {
    // Mutation / Database / Make fetch
  } catch(error) {
    console.error("Error", error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  try {
    // Create a use account
  } catch(error) {
    console.error("Error", error)
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
