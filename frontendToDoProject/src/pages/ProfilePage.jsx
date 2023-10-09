import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">
          Bienvenido(a) a tu perfil de usuario {user.name}
        </h1>
        <p className="my-4">{user.email} </p>
        <p>Por ahora no tenemos muchas cosas en tu perfil, pásate más adelante :) </p>
      </Card>
    </div>
  );
}

{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

export default ProfilePage;
