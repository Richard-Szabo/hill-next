"use client";

import SquareButton from "../Shared/Basic/SquareButton";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  msg: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (
    formData: ContactFormInputs
  ) => {
    setIsLoading(true);
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.msg,
      }),
    })
      .then(() => {
        toast.success("A megkeresését fogadtuk, hamarosan felkeressük önt!");
        reset();
      })
      .catch(() => {
        toast.warning("Az üzenetét nem sikerült elküldeni, kérjük próbálja újra!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div></div>
      <div className="w-full flex flex-col md:flex-row md:gap-10 ">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="lastName"
            className={`font-semibold block py-2.5 px-3 w-full text-sm md:text-md font-hill border-b-2 bg-white/30  appearance-none focus:outline-none focus:ring-0 peer 
                ${
                  errors.lastName
                    ? "border-b-red-500 focus:border-b-red-500"
                    : "border-b-white focus:border-b-hill-secondary"
                }
                `}
            placeholder=" "
            {...register("lastName", { required: true })}
          />
          <label
            htmlFor="lastName"
            className="hidden absolute bottom-1/2 translate-y-1/2 text-sm md:text-md left-3 font-hill peer-focus:hidden peer-placeholder-shown:block text-gray-100"
          >
            Vezetéknév*
          </label>
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              A vezetéknév megadása kötelező.
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="firstName"
            className={`font-semibold block py-2.5 px-3 w-full text-sm md:text-md font-hill border-b-2 bg-white/30  appearance-none focus:outline-none focus:ring-0 peer 
                ${
                  errors.firstName
                    ? "border-b-red-500 focus:border-b-red-500"
                    : "border-b-white focus:border-b-hill-secondary"
                }
                `}
            placeholder=" "
            {...register("firstName", { required: true })}
          />
          <label
            htmlFor="firstName"
            className="hidden absolute bottom-1/2 translate-y-1/2 text-sm md:text-md left-3 font-hill peer-focus:hidden peer-placeholder-shown:block text-gray-100"
          >
            Keresztnév*
          </label>
          {errors.firstName && (
            <p className="absolute text-red-500 text-xs mt-1 ml-1">
              A keresztnév megadása kötelező.
            </p>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-10">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            className={`font-semibold block py-2.5 px-3 w-full text-sm md:text-md font-hill border-b-2 bg-white/30  appearance-none focus:outline-none focus:ring-0 peer 
                ${
                  errors.email
                    ? "border-b-red-500 focus:border-b-red-500"
                    : "border-b-white focus:border-b-hill-secondary"
                }
                `}
            placeholder=" "
            {...register("email", {
              required: "Az e-mail cím megadása kötelező.",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Kérjük, érvényes e-mail címet adjon meg.",
              },
            })}
          />
          <label
            htmlFor="email"
            className="hidden absolute bottom-1/2 translate-y-1/2 text-sm md:text-md left-3 font-hill peer-focus:hidden peer-placeholder-shown:block text-gray-100"
          >
            E-mail cím*
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="phone"
            className={`font-semibold block py-2.5 px-3 w-full text-sm md:text-md font-hill border-b-2 bg-white/30  appearance-none focus:outline-none focus:ring-0 peer 
                ${
                  errors.phone
                    ? "border-b-red-500 focus:border-b-red-500"
                    : "border-b-white focus:border-b-hill-secondary"
                }
                `}
            placeholder=" "
            {...register("phone", {
              required: "Az telefonszám megadása kötelező.",
              pattern: {
                value: /^\+?[\d\s]{7,20}$/,
                message:
                  "Kérjük, érvényes telefonszámot adjon meg (pl. +36 30 123 4567).",
              },
            })}
          />
          <label
            htmlFor="phone"
            className="hidden absolute bottom-1/2 translate-y-1/2 text-sm md:text-md left-3 font-hill peer-focus:hidden peer-placeholder-shown:block text-gray-100"
          >
            Telefonszám*
          </label>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="relative w-full">
        <textarea
          id="msg"
          placeholder=" "
          className={`font-semibold px-3 py-1 h-24 w-full scroll-y-auto text-sm md:text-md font-hill border bg-white/30  appearance-none focus:outline-none focus:ring-0 peer 
            ${
              errors.firstName
                ? "border-b-red-500 focus:border-b-red-500"
                : "border-b-white focus:border-b-hill-secondary"
            }
            `}
          {...register("msg", {
            required: "Az üzenet megadása kötelezőm kérjük írja le a panaszát!",
          })}
        ></textarea>
        <label
          htmlFor="msg"
          className="hidden absolute top-1 left-3 text-sm md:text-md font-hill peer-focus:hidden peer-placeholder-shown:block text-gray-100"
        >
          Az ön üzenete*
        </label>
        {errors.msg && (
          <p className="text-red-500 text-xs mt-1 ml-1">{errors.msg.message}</p>
        )}
      </div>
      <div className="py-10">
        <SquareButton
          label="Kapcsolatfelvétel"
          type="submit"
          isLoading={isLoading}
          borderHighlightColor="group-hover:border-hill-secondary"
          bgHighlightColor="group-hover:bg-hill-secondary"
        />
      </div>
    </form>
  );
}
