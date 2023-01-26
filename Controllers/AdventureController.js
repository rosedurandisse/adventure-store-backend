const express = require("express");
const {
  getAllAdventures,
  getOneAdventure,
  deleteOneAdventure,
  createAnAdventure,
  updateAnAdventure,
} = require("../Queries/Adventure");
const adventures = express.Router();

adventures.get("/", async (request, response) => {
  const allAdventures = await getAllAdventures();
  response.status(200).json(allAdventures);
});

adventures.get("/:id", async (request, response) => {
  const oneAdventure = await getOneAdventure(request.params.id);
  response.status(200).json(oneAdventure);
});

adventures.delete("/:id", async (request, response) => {
  const deletedAdventure = await deleteOneAdventure(request.params.id);
  response.status(200).json(deletedAdventure);
});

adventures.post("/", async (request, response) => {
  const addedAdventure = await createAnAdventure(request.body);
  response.status(200).json(addedAdventure);
});

adventures.put("/:id", async (request, response) => {
  const updatedAdventure = await updateAnAdventure(
    request.body,
    request.params.id
  );
  response.status(200).json(updatedAdventure);
});

module.exports = adventures;
