import asyncHandler from "express-async-handler";

//@desc GET all contacts
//@route GET /api/contacts
//@access Public
export const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
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
  res.status(201).json({ message: "Create a new contact" });
});

//@desc GET a contact by ID
//@route GET /api/contacts/:id
//@access Public
export const getContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get contact with ID: ${id}` });
});

//@desc Update a contact by ID
//@route PUT /api/contacts/:id
//@access Public
export const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update contact with ID: ${id}` });
});

//@desc Delete a contact by ID
//@route DELETE /api/contacts/:id
//@access Public
export const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete contact with ID: ${id}` });
});
