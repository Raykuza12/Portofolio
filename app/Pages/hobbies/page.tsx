import React from "react";
import HobbiesContent from "./content";

const hobbies = [
  {
    id: 1,
    name: "Gaming",
    description:
      "Menjelajahi dunia virtual dan menghadapi berbagai tantangan menarik dalam video game.",
    icon: "ComputerDesktopIcon",
    details: [
      "RPG",
      "Strategy",
      "Adventure",
      "Puzzle",
      "The Witcher 3",
      "Civilization VI",
      "Portal 2",
    ],
    images: [
      {
        title: "The Witcher 3",
        src: "/gaming/game-1.jpg",
        description: "Game RPG dengan dunia terbuka yang epik",
      },
      {
        title: "Civilization VI",
        src: "/gaming/game-2.jpg",
        description: "Game strategi peradaban terbaik",
      },
      {
        title: "Portal 2",
        src: "/gaming/game-3.jpg",
        description: "Game puzzle dengan cerita yang menarik",
      },
    ],
  },
  {
    id: 2,
    name: "Musik",
    description:
      "Mendengarkan dan mengapresiasi berbagai genre musik dari seluruh dunia.",
    icon: "MusicalNoteIcon",
    details: [
      "Rock",
      "Jazz",
      "Classical",
      "Electronic",
      "Pink Floyd",
      "Miles Davis",
      "Daft Punk",
    ],
    images: [
      {
        title: "Pink Floyd - Dark Side of the Moon",
        src: "/music/music-1.jpg",
        description: "Album rock progresif legendaris",
      },
      {
        title: "Miles Davis - Kind of Blue",
        src: "/music/music-2.jpg",
        description: "Album jazz klasik yang ikonik",
      },
      {
        title: "Daft Punk - Random Access Memories",
        src: "/music/music-3.jpg",
        description: "Album elektronik modern yang revolusioner",
      },
    ],
  },
  {
    id: 3,
    name: "Film",
    description:
      "Menikmati berbagai karya sinematografi dan mengeksplorasi cerita-cerita menarik.",
    icon: "FilmIcon",
    details: [
      "Sci-Fi",
      "Drama",
      "Thriller",
      "Inception",
      "The Godfather",
      "Parasite",
    ],
    images: [
      {
        title: "Inception",
        src: "/film/film-1.jpg",
        description: "Film sci-fi yang mengeksplorasi alam mimpi",
      },
      {
        title: "The Godfather",
        src: "/film/film-2.jpg",
        description: "Kisah epik mafia yang legendaris",
      },
      {
        title: "Parasite",
        src: "/film/film-3.jpg",
        description: "Film Korea yang memenangkan Oscar",
      },
    ],
  },
  {
    id: 4,
    name: "Menggambar",
    description:
      "Mengekspresikan kreativitas melalui sketsa dan ilustrasi digital maupun tradisional.",
    icon: "PencilSquareIcon",
    details: [
      "Sketching",
      "Digital Art",
      "Watercolor",
      "Portrait",
      "Landscape",
    ],
    images: [
      {
        title: "Digital Art",
        src: "/art/art-1.jpg",
        description: "Karya seni digital modern",
      },
      {
        title: "Watercolor Landscape",
        src: "/art/art-2.jpg",
        description: "Lukisan pemandangan dengan cat air",
      },
      {
        title: "Portrait Sketch",
        src: "/art/art-3.jpg",
        description: "Sketsa potret dengan pensil",
      },
    ],
  },
  {
    id: 5,
    name: "Membaca",
    description:
      "Memperluas wawasan dan imajinasi melalui berbagai buku dan artikel menarik.",
    icon: "BookOpenIcon",
    details: [
      "Science Fiction",
      "Fantasy",
      "Non-fiction",
      "1984 by George Orwell",
      "Sapiens by Yuval Noah Harari",
    ],
    images: [
      {
        title: "1984 by George Orwell",
        src: "/book/book-1.jpg",
        description: "Novel distopia klasik tentang pengawasan total",
      },
      {
        title: "Sapiens",
        src: "/book/book-2.jpg",
        description: "Sejarah singkat umat manusia",
      },
      {
        title: "Science Fiction Collection",
        src: "/book/book-3.jpg",
        description: "Koleksi buku fiksi ilmiah terbaik",
      },
    ],
  },
];

const HobbiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-20 px-4 sm:px-6 lg:px-8 text-base-content">
      <HobbiesContent hobbies={hobbies} />
    </div>
  );
};

export default HobbiesPage;
