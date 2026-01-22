import { Scale, Users, Shield, Briefcase, Gavel, FileText } from 'lucide-react';

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/p/AF1QipO_SFqaWSyxsFUYswf8JYqNoPpg9hHH5EPljH8M=s1600",
  office: "https://lh3.googleusercontent.com/p/AF1QipPw-DSBpJKStVUeYgSPXtpxVysEQOBk0bzLq9oc=s1600",
  team: {
    luis: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/559671710_791074117016061_896128732891621217_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE9XpF79u-mPa-RXmwWK_-c46xU8qwcl3TjrFTyrByXdN6cSlddirar9vt70F-SLpd1jwgRmhb4X8XbRph7-uZf&_nc_ohc=Cxr-kPOQx7wQ7kNvwFmysbx&_nc_oc=AdnCEfWkIDx6hWgcgQD0pqUZtJUh7oqovzn2uFaRbVF93Apx8lffio0qteqxJVbXT24&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=0d2ZoW1Z_fM2oIVS8IAAcg&oh=00_Afrs43KCBzbFbKP5lekRtQEW66Xv4aPWe4EzUL131b9FZA&oe=6978039C",
    jaime: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/559945170_787454084044731_5436196781021548676_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERbwTy8BR504CZQ98M2o95-NCwjgv5kuj40LCOC_mS6KhMOCk_WWH45cFnDrR8Kc_DH-l8Na63ZLPnQITySOue&_nc_ohc=0ZmOh3EaMKIQ7kNvwHYh97d&_nc_oc=AdmvLrCxvFbwTkbRo2ojUQE5sK9FHbsWr5fSChxf5dqg8IoEMlS8Q2STdXUGWVG_W7g&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=UbnOrOf-ilTU72zv1xAqSA&oh=00_AfqOfEMrk9T49c8yppTHYRCpsgpqhJ7MnSttOAbma43yFg&oe=69780564",
    guadalupe: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/558180070_785588707564602_3775879599920898753_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG8_hkjy05ws4Ak4i44MF8XCGX4OpuTHxUIZfg6m5MfFe4AfacIp27iJYt6fRf3GjGQ5axFx5BEuBB5KTB4Aoy5&_nc_ohc=Ws2az7Y_z2wQ7kNvwFDsUOa&_nc_oc=Adk7iK0j7aEgQDe8eUWwMHJz4oxJ4DfkdGl6_dC7dI77D-ojUVMebRnHlEEvxMuaxVw&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=U_oSbS6qqsggwpp08lDpog&oh=00_AfrfZT8_HNup1_5iTdFB5iGExvOwT2_JAO5WZJXJtid_Pw&oe=69781D20"
  }
};

export const CONTACT_INFO = {
  phone1: "(871) 494 60 87",
  phone2: "+52 871 211 0454",
  email: "mr.asociadostrc@gmail.com",
  address: "Av. Allende 5375 Oriente, Planta Alta, Col. Villa California, Torreón, Coahuila, México",
  hours: "Lunes a Viernes de 9:00 AM a 6:00 PM",
  whatsapp: "528712110454", // Pure number for API
  whatsappDisplay: "+52 871 211 0454"
};

export const SERVICES = [
  {
    title: "Derecho Familiar",
    description: "Resolución de conflictos de divorcio, guarda y custodia, pensiones alimenticias, sucesiones y patrimonio familiar.",
    icon: Users
  },
  {
    title: "Derecho Laboral",
    description: "Defensa integral de los derechos del trabajador y asesoría estratégica patronal ante controversias laborales.",
    icon: Briefcase
  },
  {
    title: "Derecho Penal",
    description: "Representación jurídica sólida y defensa técnica especializada para la protección de su libertad y seguridad.",
    icon: Gavel
  },
  {
    title: "Asesoría Integral",
    description: "Consultoría legal personalizada para personas físicas y morales en distintos ramos del derecho.",
    icon: Shield
  }
];

export const TEAM = [
  {
    name: "Lic. Luis Reza",
    role: "Abogado Socio",
    image: IMAGES.team.luis
  },
  {
    name: "Lic. Jaime Palafox",
    role: "Abogado Asociado",
    image: IMAGES.team.jaime
  },
  {
    name: "Lic. Guadalupe Magaña",
    role: "Abogada Asociada",
    image: IMAGES.team.guadalupe
  }
];