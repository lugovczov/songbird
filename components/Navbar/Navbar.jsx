import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';

export default function Navbar({ sectionNames, dataSection, setDataSection }) {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      {sectionNames.map((el, index) => {
        return (
          <NavbarItem
            sectionName={el}
            dataSection={dataSection}
            setDataSection={setDataSection}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
