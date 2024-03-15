/* eslint-disable react/prop-types */

import PetDetails from "./PetDetails";

function PetsList({ pets, setSelectedPet, deletePet }) {
  return (
    <div className=" box_appointments">
      {pets.map((pet) => (
        <PetDetails
          pet={pet}
          key={pet.id}
          setSelectedPet={setSelectedPet}
          deletePet={deletePet}
        />
      ))}
    </div>
  );
}

export default PetsList;
