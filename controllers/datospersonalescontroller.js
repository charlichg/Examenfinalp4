const Datospersonales = require("../model/datospersonales");

// Mostrar
module.exports.mostrar = (req, res) => {
  Datospersonales.find({})
    .then((datospersonales) => {
      console.log(datospersonales);
       res.render('index', { datospersonales: datospersonales }); // Renderizar la vista index con los datos de los productos
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
  const Datospersonales = new datospersonales({
    nombre: req.body. nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    Título: req.body.email,
    Institución: req.body.email,
    empresa: req.body.email,
    fecha: req.body.email,
  });

  try {
    await datospersonales.save();
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
  const nombre= req.body.nombre_editar
  const apellido= req.body.apellido_editar
  const telefono= req.body.telefono_editar
  const email= req.body.email_editar
  const Título= req.body.Título_editar
  const Institución= req.body.Institución_editar
  const empresa= req.body.empresa_editar
  const fecha= req.body.fecha_editar
 
  try {
    const updateddatosperso = await datospersonales.findByIdAndUpdate(id, {nombre,apellido,telefono,email,Titulo,Institución,Título,empresa,fecha}, { new: true })
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
    await datospersonales.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar '
    });
  }
};

