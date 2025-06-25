import type { StateCreator } from "zustand";
import type { Contacts, Response } from "../types";
import { submitContact } from "../services/contactService";

export type contactSliceType = {
  response: Response;
  submitContact: (info: Contacts) => Promise<void>
};

export const createContactSlice: StateCreator<contactSliceType> = (set) => ({
  response: {} as Response,
  submitContact: async (info: Contacts) => {
    const response = await submitContact(info);
    set({
        response
    })
  },
});
