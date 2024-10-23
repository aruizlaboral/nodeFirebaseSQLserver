const User = require('./users');
const uploadController = require('./uploadController');

exports.updateUserUrl = (req, res) => {
  uploadController.uploadFile(req, res, async () => {
    try {
      const user = new User();
      user.url = req.publicUrl;
      user.id = req.body.id;
      user.email = req.body.email;
      user.name = req.body.name;
      user.lastname = req.body.lastname;
      user.phone = req.body.phone;
      user.password = req.body.password;
      user.session_token = req.body.session_token;
      user.notification_token = req.body.notification_token;
      user.created_at = new Date();
      user.updated_at = new Date();

      // Llamar a la función para actualizar la base de datos
      const result = await user.updateInDatabase();
      res.status(200).send({ publicUrl: user.url, result });
    } catch (error) {
      console.error('Error al actualizar el usuario en la base de datos:', error);
      res.status(500).send('Error interno del servidor.');
    }
  });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllFromDatabase();
    res.status(200).send(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error interno del servidor.');
  }
};