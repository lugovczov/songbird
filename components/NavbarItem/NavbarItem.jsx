import React from 'react';

export default function NavbarItem({
  sectionName,
  dataSection,
  setDataSection,
  index,
}) {
  return (
    <label
      className={`btn btn-success p-2 text-nowrap ${
        dataSection === index ? 'active' : 'disabled'
      }`}
    >
      <input type="radio" name="options" id={`option${index}`} /> {sectionName}
    </label>
  );
}
