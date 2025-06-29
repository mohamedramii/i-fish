"use client"
import { useState } from 'react';
import RegisterCard from './RegisterCard';


const RegisterCardWrapper = ({ fleetTypes }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectType = (id) => {
    setSelectedType(id);
    console.log(`Selected type: ${id}`); 
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        {fleetTypes.map((fleetType) => (
          <RegisterCard
            key={fleetType.id}
            title={fleetType.title}
            subtitle={fleetType.subtitle}
            description={fleetType.description}
            iconName={fleetType.iconName}
            selected={selectedType === fleetType.id}
            onClick={() => handleSelectType(fleetType.id)}
          />
        ))}
      </div>
      
   
    </>
  );
};

export default RegisterCardWrapper;
