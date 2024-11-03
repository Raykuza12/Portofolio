"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import {
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

import { FaInstagram, FaGithub } from "react-icons/fa";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  rating: number;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    rating: 0,
  });
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingSelect = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (formData.rating === 0) {
        throw new Error("Mohon berikan rating");
      }

      const querySnapshot = await getDocs(collection(db, "contacts"));
      const nextId = querySnapshot.size + 1;

      const contactData = {
        contactId: `contactId${nextId}`,
        ...formData,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "contacts"), contactData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        rating: 0,
      });
      setSubmitStatus({
        type: "success",
        message: "Pesan berhasil dikirim! Terima kasih atas feedback Anda.",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengirim pesan.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-4 pt-20 text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card lg:card-side bg-base-100 shadow-xl max-w-full w-full"
      >
        <figure className="lg:w-1/2 p-6 hidden lg:block">
          <img src="/contactpage.jpg" alt="Contact" className="rounded-xl" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Hubungi Saya</h2>

          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`alert ${
                submitStatus.type === "success"
                  ? "alert-success"
                  : "alert-error"
              } mb-4`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Lengkap</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Masukkan email"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">No. Telepon</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Masukkan nomor telepon"
                  className="input input-bordered w-full pl-10"
                />
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subjek</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Masukkan subjek pesan"
                  className="input input-bordered w-full pl-10"
                  required
                />
                <ChatBubbleLeftEllipsisIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Pesan</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tulis pesan Anda"
                className="textarea textarea-bordered h-24"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className=" label-text">Rating</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingSelect(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <StarIcon
                      className={`h-8 w-8 ${
                        star <= (hover || formData.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </div>
          </form>

          <div className="divider my-8">Atau</div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak Langsung</h3>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-primary" />
              <span>muhrizkiard@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-primary" />
              <span>+62 838 7456 1641</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub className="h-5 w-5 text-primary" />
              <span>Raykuza12</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="h-5 w-5 text-primary" />
              <span>@MUHRIZKIARD</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-primary" />
              <span>
                Jl. Kp. Ciburial, Ciherang, Kec. Nagreg, Kabupaten Bandung, Jawa
                Barat
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
