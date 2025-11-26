import React from "react";
import { Linkedin } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCards() {
  const teamMembers = [
    {
      id: 1,
      name: "MR. Saeed Lanjekar",
      profile: "/profile.webp",
      role: "DIRECTOR - TECHNICAL",
      bio: "He is 45 years of age with graduation in B.Com with main subject of account. He started his own proprietorship firm in 2010 and after decade of experience in business with valve automation, started a manufacturing unit of valve automation in 2017.",
      linkedin: "https://www.linkedin.com/in/lanjekar-saeed/"
    },
    {
      id: 2,
      name: "MR. Saeed Lanjekar",
      profile: "/profile.webp",
      role: "DIRECTOR - ADMINISTRATION",
      bio: "He is 39 years of age with graduation in BBA and after his graduation started a business in the field of fabrication in PVC and aluminium doors, partition and windows and after decade of experience in business. He is having decade of years experience to manage operations.",
      linkedin: "https://www.linkedin.com/in/lanjekar-saeed/"
    },
    {
      id: 3,
      name: "MR. Saeed Lanjekar",
      profile: "/profile.webp",
      role: "DIRECTOR - OPERATIONS",
      bio: "He is 42 years of age with MBA in Operations Management. He brings extensive experience in streamlining business processes and has successfully led multiple projects in manufacturing excellence. His expertise in supply chain management has been instrumental in company growth.",
      linkedin: "https://www.linkedin.com/in/lanjekar-saeed/"
    },
  ];

  return (
    <div className="h-[60%] bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Grid with 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center"
            >
              {/* Profile Image - Centered */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                  {member.profile ? (
                    <img
                      src={member.profile}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(" ")[1]?.[0] || member.name[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-bold text-text-secondary mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs md:text-sm text-primary font-semibold uppercase tracking-wide mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                {member.bio}
              </p>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors  font-medium"
              >
                <FaLinkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}