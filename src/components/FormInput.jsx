/* eslint-disable react/prop-types */

function FormInput({
  utility = "",
  inputType = "text",
  textArea = false,
  value,
  setValue,
}) {
  return (
    <div className="form_group">
      <label
        htmlFor={`${utility}-input`}
        className="tertiary-title"
        id={utility}
      >
        {utility.charAt(0).toUpperCase() + utility.slice(1)}
      </label>

      {textArea ? (
        <textarea
          id={`${utility}-input`}
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={inputType}
          id={`${utility}-input`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default FormInput;
