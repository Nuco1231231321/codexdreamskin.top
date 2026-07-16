export type PetCategory = "Animal" | "Character" | "Object";

export type CodexPet = {
  slug: string;
  name: string;
  author: string;
  category: PetCategory;
  image: string;
  description: string;
  sourceUrl: string;
};

export const codexPets: CodexPet[] = [
  {
    slug: "spinach",
    name: "Spinach / 菠菜",
    author: "Greenhorn",
    category: "Animal",
    image: "/pets/spinach.webp",
    description:
      "A cream-gold cat with green eyes, built as a calm companion for everyday Codex sessions.",
    sourceUrl: "https://codex-pets.net/#/pets/spinach",
  },
  {
    slug: "nougat",
    name: "Nougat / 牛轧糖",
    author: "Rover",
    category: "Animal",
    image: "/pets/nougat.webp",
    description:
      "A black-and-white pixel cat with a compact silhouette that stays readable at desktop-pet size.",
    sourceUrl: "https://codex-pets.net/#/pets/nougat",
  },
  {
    slug: "maguang",
    name: "Maguang / 码光",
    author: "black",
    category: "Character",
    image: "/pets/maguang.webp",
    description:
      "A pixel coder carrying a laptop, made for developers who want a work-themed Codex pet.",
    sourceUrl: "https://codex-pets.net/#/pets/maguang",
  },
  {
    slug: "mojo-apple",
    name: "MOJO Apple",
    author: "exile",
    category: "Object",
    image: "/pets/mojo-apple.webp",
    description:
      "A bright green apple mascot with a soft toy-like look and a clear, friendly expression.",
    sourceUrl: "https://codex-pets.net/#/pets/mojo-apple",
  },
  {
    slug: "purin-cat",
    name: "Purin cat",
    author: "Chierin",
    category: "Animal",
    image: "/pets/purin-cat.webp",
    description:
      "A round grey cat with amber eyes and a quiet pose suited to a low-distraction desktop companion.",
    sourceUrl: "https://codex-pets.net/#/pets/purin-cat",
  },
  {
    slug: "aegis-sentinel",
    name: "Aegis Sentinel",
    author: "j3rbski",
    category: "Character",
    image: "/pets/aegis-sentinel.webp",
    description:
      "A gold-and-white armored guardian for users who prefer a fantasy character beside their tasks.",
    sourceUrl: "https://codex-pets.net/#/pets/aegis-sentinel",
  },
  {
    slug: "mianmian",
    name: "Mianmian / 棉棉",
    author: "Feyy",
    category: "Animal",
    image: "/pets/mianmian.webp",
    description:
      "A small fluffy dog in a patterned sweater, designed as a warm and cheerful work companion.",
    sourceUrl: "https://codex-pets.net/#/pets/mianmian",
  },
  {
    slug: "noah-lulu",
    name: "Lulu / 噜噜",
    author: "noah",
    category: "Character",
    image: "/pets/noah-lulu.webp",
    description:
      "An orange capybara-style mascot with a rounded shape and a playful, easy-to-recognize face.",
    sourceUrl: "https://codex-pets.net/#/pets/noah-lulu",
  },
];
