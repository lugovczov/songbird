import React from 'react';

export default function NavbarItem({
  sectionName,
  dataSection,
  setDataSection,
  index,
}) {
  const handleChange = () => {
    setDataSection(index);
  };
  return (
    <label
      className={`btn btn-primary ${dataSection === index ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="options"
        id={`option${index}`}
        onClick={handleChange}
      />{' '}
      {sectionName}
    </label>
  );
}
