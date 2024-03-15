/* eslint-disable react/prop-types */

import FormInput from "./FormInput";

import { useState, useEffect } from "react";

function Form({ handleMessageUI, pets, setPets, selectedPet, setSelectedPet }) {
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [owner, setOwner] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  useEffect(() => {
    if (Object.keys(selectedPet).length > 0) {
      setPetName(selectedPet.petName);
      setSpecies(selectedPet.species);
      setOwner(selectedPet.owner);
      setTel(selectedPet.tel);
      setDate(selectedPet.date);
      setSymptoms(selectedPet.symptoms);
    }
  }, [selectedPet]);

  function generateId() {
    const ramdon = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return ramdon + fecha;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if ([petName, species, owner, tel, date, symptoms].includes("")) {
      handleMessageUI("All fields are required");
      return;
    }

    const newPetObject = {
      petName,
      species,
      owner,
      tel,
      date,
      symptoms,
    };

    if (selectedPet.id) {
      // editing

      newPetObject.id = selectedPet.id;

      const updatedPets = pets.map((currentPet) =>
        currentPet.id === selectedPet.id ? newPetObject : currentPet
      );
      setPets(updatedPets);
      handleMessageUI("Pet edited");
      setSelectedPet({});
    } else {
      // creating
      newPetObject.id = generateId();
      setPets([...pets, newPetObject]);
      handleMessageUI("Pet added");
    }

    setPetName("");
    setSpecies("");
    setOwner("");
    setTel("");
    setDate("");
    setSymptoms("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInput utility={"pet"} value={petName} setValue={setPetName} />
      <FormInput utility={"species"} value={species} setValue={setSpecies} />
      <FormInput utility={"owner"} value={owner} setValue={setOwner} />
      <FormInput utility={"tel"} value={tel} setValue={setTel} />
      <FormInput
        utility={"date"}
        inputType={"date"}
        value={date}
        setValue={setDate}
      />
      <FormInput
        utility={"symptoms"}
        textArea={true}
        value={symptoms}
        setValue={setSymptoms}
      />

      <button type="submit" className="btn form_btn u-hover-btn">
        {selectedPet.id ? "Edit pet" : "Add new pet"}
      </button>
    </form>
  );
}

export default Form;
