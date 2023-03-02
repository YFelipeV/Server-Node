import { pool } from "../data/db.js";

export const getAdmin = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tbladmin");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
export const getAdminId = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tbladmin   WHERE id= ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "usuario no encontrado" });
    res.send(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
export const postAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido, celular } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO tbladmin(nombre,apellido,celular) VALUES(?,?,?)",
      [nombre, apellido, celular]
    );
    console.log(rows);
    res.send("añadido correactamente");
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const putAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, celular } = req.body;
    const [result] = await pool.query(
      "UPDATE tbladmin SET nombre=?,apellido=?,celular=?  WHERE id=?",
      [nombre, apellido, celular, id]
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("DELETE  FROM tbladmin WHERE id= ?", [
      id,
    ]);
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
