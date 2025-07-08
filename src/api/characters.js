import db from '#db/client'

export async function createCharacter(name, clas, attack, health, userId) {
  const SQL = `
  INSERT INTP characters (name, clas, attack, health, user_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `;
  const { 
    rows: [characters]
  } = await db.query(sql, [name, clas, attack, health, userId]);
}
export async function getCharactersByUserId(userId) {
  const SQL = `
  SELECT * FROM characters WHERE user_id = $1
  `;
  const { rows: characters } = await db.query(SQL, [userId]);
  return characters;
}