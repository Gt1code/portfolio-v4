import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "scheduled-message",
    title: "Scheduled Message App",
    description:
      "A simple app for scheduling and sending messages at a later time.",
    tags: ["Next.js", "Resend", "Supabase", "Tailwind CSS"],
    liveUrl: "https://scheduledmessage.vercel.app/",
    repoUrl: "https://github.com/Gt1code/scheduledmessage",
    imageUrl: "/projects-thumbnails/capsule-thumbnail.png",
  },
  {
    id: "corporate-brandup",
    title: "The Corporate BrandUp",
    description:
      "A corporate landing page and brand identity site for The Corporate BrandUp Ltd, with animated sections and policy pages.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://www.thecorporatebrandupltd.com",
    repoUrl: "https://github.com/Gt1code/brandup",
    imageUrl: "/projects-thumbnails/brand-d-shot.webp",
  },
  {
    id: "dessert-cart",
    title: "Dessert Cart Page",
    description:
      "E-commerce product cart list with order confirmation modal and dynamic quantity controls.",
    tags: ["React", "LocalStorage"],
    liveUrl: "https://dessertlist.vercel.app",
    repoUrl: "https://github.com/Gt1code/product-cart-list",
    imageUrl: "/projects-thumbnails/d-active.jpeg",
  },
  {
    id: "notepad",
    title: "Note-taking App",
    description:
      "A lightweight note-taking application that allows users to create, delete, edit, and organize notes with a clean and intuitive interface.",
    tags: ["React.js", "Context API", "React-router", "localStorage"],
    liveUrl: "https://notepad-v1.vercel.app/",
    repoUrl: "https://github.com/Gt1code/notepad",
    imageUrl: "/projects-thumbnails/all-notes.jpeg",
  },
];
