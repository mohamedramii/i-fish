"use client"
import { useState } from 'react';
import PackageCard from './PackageCard';


const PackageCardWrapper = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
    console.log(`Selected package: ${id}`);
  };

  return (
    <>
      <div className="flex  justify-center gap-6">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            description={pkg.description}
            note={pkg.note}
            iconName={pkg.iconName}
            selected={selectedPackage === pkg.id}
            onClick={() => handleSelectPackage(pkg.id)}
          />
        ))}
      </div>
    
    </>
  );
};

export default PackageCardWrapper;
