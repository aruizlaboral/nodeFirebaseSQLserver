const sql = require('mssql');
const dbConfig = require('./dbConfig');

class User {
  constructor() {
    this.id = '';
    this.email = '';
    this.name = '';
    this.lastname = '';
    this.phone = '';
    this.image = '';
    this.password = '';
    this.session_token = '';
    this.notification_token = '';
    this.created_at = new Date();
    this.updated_at = new Date();
    this.url = '';
  }

  async updateInDatabase() {
    try {
      await sql.connect(dbConfig);
      const result = await sql.query`
        UPDATE Users SET 
          email = ${this.email},
          name = ${this.name},
          lastname = ${this.lastname},
          phone = ${this.phone},
          image = ${this.url},
          password = ${this.password},
          session_token = ${this.session_token},
          notification_token = ${this.notification_token},
          updated_at = ${this.updated_at}
        WHERE id = ${this.id}`;
      return result;
    } catch (error) {
      throw new Error('Error al actualizar el usuario en la base de datos: ' + error.message);
    }
  }

  static async getAllFromDatabase() {
    try {
      await sql.connect(dbConfig);
      const result = await sql.query`SELECT TOP(5) *  FROM Acceso.TblUsuarios`;
      return result.recordset;
    } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
    }
  }
}

module.exports = User; 