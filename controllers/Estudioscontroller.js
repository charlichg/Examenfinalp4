// cuatro funciones para manejar operaciones CRUD relacionadas con un modelo llamado "Estudios".
const Estudios = require("../model/Estudios");

// Mostrar
module.exports.mostrar = (req, res) => {
    Estudios.find({})
    .then((estudios) => {
      console.log(estudios);
       res.render('index', { estudios: estudios }); // Renderizar la vista index con los datos de los productos
    })
    .catch((error) => {
      console.error(error);// estado 500 con un mensaje que indica el error.
      res.status(500).json({
        message: "Error mostrando estudios",
      });
    });
};

//Crear
module.exports.crear = async (req, res) => {
  const estudios = new estudios({
    Título: req.body.Título,
    Institución: req.body.Institución,
    Fecha: req.body.Fecha,
  });

  try {
    await estudios.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear"
    });
  }
};
//Editar
module.exports.editar = async (req, res) => {//La función extrae los datos actualizados del cuerpo de la solicitud y utiliza el ID proporcionado en la solicitud 
  const id = req.body.id_editar
  const Título= req.body.Título_editar
  const Institución= req.body.Institución_editar
  const Fecha= req.body.Fecha_editar

  try {
    const updatedEstudi = await Estudios.findByIdAndUpdate(id, {Título,Institución,Fecha}, { new: true })
    res.redirect('/')
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar el producto'
    })
  }
}

//Eliminar
module.exports.borrar = async (req, res) => {//La función utiliza el ID proporcionado en la solicitud para buscar y eliminar el producto correspondiente de la base de datos.
  const id = req.params.id;
  try {
    await Estudios.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar el producto'
    });
  }
};