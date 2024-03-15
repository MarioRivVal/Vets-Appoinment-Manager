/* eslint-disable react/prop-types */

function Title({ title }) {
  return (
    <div className="title-box">
      <div className="yellow-line"></div>
      <h2 className="secondary-title">{title}</h2>
      <div className="yellow-line"></div>
    </div>
  );
}

export default Title;
