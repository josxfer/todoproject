function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Acerca de este proyecto</h1>
      <p className="my-4">
        Este proyecto web Fullstack permite a los usuarios registrarse, iniciar
        sesión y gestionar diversas tareas.
      </p>
      <p className="my-4">
        En el Frontend, se utilizó React para desarrollar la interfaz de
        usuario, aplicando estilos con el framework de CSS llamado Tailwind.
        Además, se implementaron características importantes como la
        autenticación, rutas protegidas y un sólido manejo de errores para
        garantizar una experiencia de usuario segura y sin interrupciones.
      </p>
      <p className="my-4">
        En cuanto al Backend, se desarrolló utilizando Node.js y su framework
        Express. Se aprovecharon diferentes paquetes para optimizar y facilitar
        el proceso de desarrollo. Como base de datos, se optó por PostgreSQL,
        que permite almacenar y gestionar los datos de manera eficaz y
        escalable.
      </p>
    </div>
  );
}

export default AboutPage;
