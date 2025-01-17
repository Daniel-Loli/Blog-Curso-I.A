// Team.jsx
import React from "react";

const teamMembers = [
  {
    name: "Nilton Daniel Loli Collantes",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQGOJJA3V3mG-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712244604598?e=1742428800&v=beta&t=6mvaJmlbpJCE8R96DtiTU_tat5B5EAnZEW8wwf_ScNg",
  },
  {
    name: "Chirinos Huerta Michael David",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQF8F90QaLNYtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705108616115?e=1742428800&v=beta&t=nOSYYENNVNu1dLlnGGEUAn-SGA1onH83nj-eJiN_H9k",
  },
  {
    name: "Serrato Vargas José Eduardo",
    photo: "/images/otroFoto.jpg", // Ruta local
  },
  {
    name: "Del Solar Rojas Jorge Sebastian",
    photo: "/images/FOTODELSOLAR.jpg",
  },
  {
    name: "Mendoza Bermejo Darwin Karls",
    photo: "/images/FOTODARWIN.png", // Ruta local
  },
];

const Team = () => {
  return (
    <section className="my-8 px-6">
      <h2 className="text-2xl font-bold mb-6">Nuestro Equipo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border rounded-lg p-4 shadow-sm 
                       hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.photo}
              alt={`Foto de ${member.name}`}
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            <p className="font-semibold text-center">{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
