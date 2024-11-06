// app/component/Stars.tsx
"use client";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const Stars = () => {
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      const docRef = doc(db, "Stars", "aboutMe");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStars(docSnap.data().stars || 0);
      } else {
        // Jika dokumen belum ada, buat dengan nilai awal 0
        await setDoc(docRef, { stars: 0 });
      }
      setLoading(false);
    };

    fetchStars();
  }, []);

  const handleStarClick = async () => {
    const newStars = stars + 1;
    setStars(newStars);

    const docRef = doc(db, "Stars", "aboutMe");
    await updateDoc(docRef, { stars: newStars });
  };

  if (loading) {
    return <div className="loading loading-spinner loading-sm"></div>;
  }

  return (
    <div className="relative top-4 left-4">
      <button
        onClick={handleStarClick}
        className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full hover:bg-base-300 transition-colors"
      >
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <span className="text-base-content">{stars} bintang</span>
      </button>
    </div>
  );
};

export default Stars;
