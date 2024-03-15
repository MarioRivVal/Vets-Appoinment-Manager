import Title from "./components/Title";
import Form from "./components/Form";
import PetsList from "./components/PetsList";

import { useState, useEffect } from "react";

function App() {
  const petsLS = JSON.parse(localStorage.getItem("pets")) ?? [];

  const [pets, setPets] = useState(petsLS);
  const [messageUI, setMessageUI] = useState("");
  const [selectedPet, setSelectedPet] = useState({});

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  function handleMessageUI(message) {
    setMessageUI(message);

    setTimeout(() => {
      setMessageUI("");
    }, 2000);
  }

  function deletePet(petToDelete) {
    const resp = confirm("Do you really want to delete this patience?");

    if (resp) {
      setPets((pets) =>
        pets.filter((currentPet) => currentPet.id !== petToDelete.id)
      );

      handleMessageUI("Pet deleted");
    }
  }

  return (
    <div className="container">
      <div className="box box-pet">
        {messageUI && <p className="text-alert success">{messageUI}</p>}
        <Title title={"Pet"} />
        <Form
          handleMessageUI={handleMessageUI}
          pets={pets}
          setPets={setPets}
          selectedPet={selectedPet}
          setSelectedPet={setSelectedPet}
        />
      </div>

      <div className="box box-appointment">
        <Title title={"Appointments"} />
        <PetsList
          pets={pets}
          setSelectedPet={setSelectedPet}
          deletePet={deletePet}
        />
      </div>
    </div>
  );
}

export default App;
