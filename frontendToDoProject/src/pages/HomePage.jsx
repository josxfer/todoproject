import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();

  return <div>
    <Card>
      <h1 className="text-3xl font-bold my-4" >Página principal</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, saepe architecto voluptatem alias sed dignissimos aperiam. Voluptatem laudantium dolorem odit nihil dolores quasi nam! Soluta asperiores porro quae vitae expedita aspernatur sunt officia, laudantium quo quis molestiae exercitationem tempora numquam?</p>
    </Card>
  </div>;
}

export default HomePage;
