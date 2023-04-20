// cuatro funciones para manejar operaciones CRUD relacionadas con un modelo llamado "Estudios".
const Laboral = require("../model/laboral.js");

// Mostrar
module.exports.mostrar = (req, res) => {
    Laboral.find({})
    .then((laboral) => {
      console.log(laboral);
       res.render('index', { laboral: laboral }); // Renderizar la vista index con los datos de los productos
    })
    .catch((error) => {
      console.error(error);// estado 500 con un mensaje que indica el error.
      res.status(500).json({
        message: "Error mostrando",
      });
    });
};

//Crear
module.exports.crear = async (req, res) => {
  const laboral = new laboral({
    empresa: req.body.empresa,
    cargo: req.body.cargo,
    fechainicio: req.body.fechainicio,
    fechafin: req.body.fechafin
  });

  try {
    await laboral.save();
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
  const  empresa= req.body. empresa_editar
  const  cargo= req.body. cargo_editar
  const fechainicio= req.body.fechainicio_editar
  const fechafin= req.body.fechafin_editar

  try {
    const updatedLabor = await Laboral.findByIdAndUpdate(id, {empresa,cargo,fechainicio,fechafin}, { new: true })
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
    await Laboral.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar el producto'
    });
  }
};