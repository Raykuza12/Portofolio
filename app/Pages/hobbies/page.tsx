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
        src: "/images/gaming/witcher3.jpg",
        description: "Game RPG dengan dunia terbuka yang epik",
      },
      {
        title: "Civilization VI",
        src: "/images/gaming/civ6.jpg",
        description: "Game strategi peradaban terbaik",
      },
      {
        title: "Portal 2",
        src: "/images/gaming/portal2.jpg",
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
        src: "/images/music/pink-floyd.jpg",
        description: "Album rock progresif legendaris",
      },
      {
        title: "Miles Davis - Kind of Blue",
        src: "/images/music/miles-davis.jpg",
        description: "Album jazz klasik yang ikonik",
      },
      {
        title: "Daft Punk - Random Access Memories",
        src: "/images/music/daft-punk.jpg",
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
        src: "/images/movies/inception.jpg",
        description: "Film sci-fi yang mengeksplorasi alam mimpi",
      },
      {
        title: "The Godfather",
        src: "/images/movies/godfather.jpg",
        description: "Kisah epik mafia yang legendaris",
      },
      {
        title: "Parasite",
        src: "/images/movies/parasite.jpg",
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
        src: "/images/art/digital.jpg",
        description: "Karya seni digital modern",
      },
      {
        title: "Watercolor Landscape",
        src: "/images/art/watercolor.jpg",
        description: "Lukisan pemandangan dengan cat air",
      },
      {
        title: "Portrait Sketch",
        src: "/images/art/portrait.jpg",
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
        src: "/images/books/1984.jpg",
        description: "Novel distopia klasik tentang pengawasan total",
      },
      {
        title: "Sapiens",
        src: "/images/books/sapiens.jpg",
        description: "Sejarah singkat umat manusia",
      },
      {
        title: "Science Fiction Collection",
        src: "/images/books/scifi.jpg",
        description: "Koleksi buku fiksi ilmiah terbaik",
      },
    ],
  },
];

const HobbiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-20 px-4 sm:px-6 lg:px-8">
      <HobbiesContent hobbies={hobbies} />
    </div>
  );
};

export default HobbiesPage;
