/* eslint-disable react/prop-types */

function PetDetails({ pet, setSelectedPet, deletePet }) {
  const { petName, species, owner, tel, date, symptoms } = pet;

  function toUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="appointment">
      <div className="appointment_details">
        <h3 className="tertiary-title">{petName.toUpperCase()}</h3>
        <p>
          {" "}
          <span className="u-bold-text">Species: </span>
          {toUppercase(species)}
        </p>
        <p>
          {" "}
          <span className="u-bold-text">Owner: </span>
          {toUppercase(owner)}
        </p>
        <p>
          {" "}
          <span className="u-bold-text">Tel: </span>
          {tel}
        </p>
        <p>
          {" "}
          <span className="u-bold-text">Date: </span>
          {date}
        </p>
        <p>
          {" "}
          <span className="u-bold-text">Symptoms: </span>
          {toUppercase(symptoms)}
        </p>
      </div>

      <button
        type="button"
        className="appointment_btn appointment_btn-edit u-hover-btn"
        onClick={() => setSelectedPet(pet)}
      >
        edit
      </button>

      <button
        type="button"
        className="appointment_btn appointment_btn-delete u-hover-btn"
        onClick={() => deletePet(pet)}
      >
        delete
      </button>
    </div>
  );
}

export default PetDetails;
