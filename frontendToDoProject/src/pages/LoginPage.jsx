import { Card, Input, Button, Label, Container } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) navigate("/tasks");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}

        <h1 className="text-3xl font-bold my-2 text-center">Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            type="email"
            placeholder="Correo Electrónico"
            {...register("email", {
              required: true,
            })}
          />

          {errors.email && (
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
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}

          <Button>Iniciar Sesion</Button>
        </form>

        <div className="flex justify-between my-4">
          <p className="mr-4">¿No tienes una cuenta?</p>
          <Link to="/register" className="font-bold">
            Regístrate
          </Link>
        </div>
      </Card>
    </Container>
  );
}

export default LoginPage;
