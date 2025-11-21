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
      id: 2,8
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - ADMINISTRATION",
      bio: "He is 39 years of age with graduation in BBA and after his graduation started a business in the field of fabrication in PVC and aluminium doors, partition and windows and after decade of experience in business. He is having decade of years experience to manage operations."
    },
    {
      id: 3,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - OPERATIONS",
      bio: "He is 42 years of age with MBA in Operations Management. He brings extensive experience in streamlining business processes and has successfully led multiple projects in manufacturing excellence. His expertise in supply chain management has been instrumental in company growth."
    }
  ];

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-[60%] bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl xl:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Profile Image Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-gray-600">
                    {member.name.split(' ')[1][0]}
                  </span>
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className={expanded[member.id] ? '' : 'line-clamp-3'}>
                  {member.bio}
                </p>
                <button
                  onClick={() => toggleExpand(member.id)}
                  className="text-primary hover:text-primary text-sm mt-2 font-medium"
                >
                  {expanded[member.id] ? 'Show less' : 'See more...'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}