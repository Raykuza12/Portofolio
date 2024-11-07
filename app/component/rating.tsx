"use client";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Rating = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "contacts"),
      (snapshot) => {
        let total = 0;
        let count = 0;

        snapshot.docs.forEach((doc) => {
          const rating = Number(doc.data().rating);
          if (rating >= 1 && rating <= 5) {
            total += rating;
            count++;
          }
        });

        const average = count > 0 ? Number((total / count).toFixed(1)) : 0;
        setAverageRating(average);
        setTotalRatings(count);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching ratings:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading loading-spinner loading-md"></div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-base-content">
          {averageRating.toFixed(1)}
        </span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-6 w-6 ${
                star <= averageRating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Berdasarkan {totalRatings} ulasan
      </p>
    </div>
  );
};

export default Rating;
