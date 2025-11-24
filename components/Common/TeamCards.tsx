import React, { useState } from 'react';

export default function TeamCards() {
  const [expanded, setExpanded] = useState({});

  const teamMembers = [
    {
      id: 1,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - TECHNICAL",
      bio: "He is 45 years of age with graduation in B.Com with main subject of account. He started his own proprietorship firm in 2010 and after decade of experience in business with valve automation, started a manufacturing unit of valve automation in 2017."
    },
    {
      id: 2,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - ADMINISTRATION",
      bio: "He is 39 years of age with graduation in BBA and after his graduation started a business in the field of fabrication in PVC and aluminium doors, partition and windows and after decade of experience in business. He is having decade of years experience to manage operations."
    },
    {
      id: 3,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - OPERATIONS",
      bio: "He is 42 years of age with MBA in Operations Management. He brings extensive experience in streamlining business processes and has successfully led multiple projects in manufacturing excellence. His expertise in supply chain management has been instrumental in company growth."
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-[60%] bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Grid with 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white  shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Profile Image Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ')[1]?.[0] || member.name[0]}
                  </span>
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-primary font-semibold uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <div className="text-sm text-text-secondary leading-relaxed flex-grow">
                <p className={expanded[member.id] ? '' : 'line-clamp-3 sm:line-clamp-4'}>
                  {member.bio}
                </p>
                <button
                  onClick={() => toggleExpand(member.id)}
                  className="text-primary hover:text-text-primary mt-3 font-medium transition-colors inline-block"
                >
                  {expanded[member.id] ? '← Show less' : 'See more →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}