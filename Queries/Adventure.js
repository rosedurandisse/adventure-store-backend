const db = require("../db/dbConfig");

const getAllAdventures = async () => {
  try {
    let allAdventures = await db.any("SELECT * FROM adventures");
    // console.log(allAdventures);
    return allAdventures;
  } catch (error) {
    return error;
  }
};

getOneAdventure = async (id) => {
  try {
    let oneAdventure = await db.one("SELECT * FROM adventures WHERE id=$1", id);
    return oneAdventure;
  } catch (error) {
    return error;
  }
};

deleteOneAdventure = async (id) => {
  try {
    let deletedAdventure = await db.one(
      "DELETE FROM adventures WHERE id=$1 RETURNING *",
      id
    );
    return deletedAdventure;
  } catch (error) {
    return error;
  }
};

createAnAdventure = async (adventureObject) => {
  const { name, description, price, rating, adrenaline_approved, image } =
    adventureObject;
  try {
    let createdAdventure = await db.one(
      "INSERT INTO adventures (name, description, price, rating, adrenaline_approved,image) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *",
      [name, description, price, rating, adrenaline_approved, image]
    );
    return createdAdventure;
  } catch (error) {
    return error;
  }
};

updateAnAdventure = async (adventureObject, id) => {
  const { name, description, price, rating, adrenaline_approved, image } =
    adventureObject;
  try {
    let updatedAdventure = await db.one(
      "UPDATE adventures SET name=$1, description=$2, price=$3, rating=$4, adrenaline_approved=$5, image=$6 WHERE id=$7 RETURNING *",
      [name, description, price, rating, adrenaline_approved, image, id]
    );
    return updatedAdventure;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAdventures,
  getOneAdventure,
  deleteOneAdventure,
  createAnAdventure,
  updateAnAdventure,
};
