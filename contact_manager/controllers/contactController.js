import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

//@desc GET all contacts
//@route GET /api/contacts
//@access Public
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create a new contact
//@route POST /api/contacts
//@access Public
/**
 * Create a new contact
 * @param {request} req
 * @param {response} res
 */
export const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email, and phone number");
  }

  const newContact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(newContact);
});

//@desc GET a contact by ID
//@route GET /api/contacts/:id
//@access Public
export const getContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update a contact by ID
//@route PUT /api/contacts/:id
//@access Public
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log("Found contact:", contact);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateContact);
  } catch (error) {
    console.error("Error finding contact:", error);
    res.status(404);
    throw new Error("Contact not found");
  }
};

//@desc Delete a contact by ID
//@route DELETE /api/contacts/:id
//@access Public
export const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log("Found contact:", contact);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    console.log("Deleted contact:", deleteContact);
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error finding contact:", error);
    res.status(404);
    throw new Error("Contact not found");
  }
});
