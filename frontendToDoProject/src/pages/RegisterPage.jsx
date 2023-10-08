import { Button, Card, Input, Label } from "../components/ui/index";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate("/profile");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {signupErrors &&
          signupErrors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}

        <h3 className="text-2xl font-bold text-blue-400">Regístrate</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            placeholder="Nombre completo"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && (
            <p className="text-red-500">El nombre es requerido</p>
          )}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: true,
            })}
          />

          {errors.name && (
            <p className="text-red-500">El correo electrónico es requerido</p>
          )}

          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: true,
            })}
          />

          {errors.name && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}

          <Button>Regístrate</Button>

          <div className="flex justify-between my-4">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className="font-bold">
              Inicia Sesion
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
