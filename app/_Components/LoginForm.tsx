"use client";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Input from "./Input";
import { loginUser } from "../_lib/actions";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  username: string;
  password: string;
};
export default function LoginForm() {
  const router = useRouter();
  const { isLoading, mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      if (res.status === 404) {
        toast.error("نام کاربری و یا رمز عبور اشتباه است");
      } else {
        router.push("/");
      }
    },
  });

  const [inputValue, setInputValue] = useState<LoginFormValues>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<Partial<LoginFormValues>>({});

  const validateInputs = useCallback(() => {
    const errors: Partial<LoginFormValues> = {};
    if (!inputValue.username) {
      errors.username = "لطفا نام کاربری خود را وارد کنید";
    }
    if (!inputValue.password) {
      errors.password = "لطفا رمز عبور خود را وارد کنید";
    }

    return errors;
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target: input } = e;

    setInputValue((prevValues) => ({
      ...prevValues,
      [input.name]: input.value,
    }));
  };
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const inputsError = validateInputs();
    setError(inputsError);
    if (Object.keys(inputsError).length === 0) {
      mutate(inputValue);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative m-auto z-10 w-full py-11 px-12 bg-white rounded-2xl max-w-[500px]">
        {/* login header part */}
        <div className="space-y-1 text-center">
          <h1 className="text-4xl font-semibold text-stone-800">Weblog task</h1>
          <h3 className="text-lg font-semibold text-orange">
            ورود به حساب کاربری
          </h3>
        </div>

        <form onSubmit={handleSubmitForm} className="flex flex-col">
          <div className="flex flex-col gap-1 mt-8">
            <Input
              label="نام کاربری"
              type="text"
              name="username"
              value={inputValue.username}
              onChange={handleInputChange}
              errors={error}
              placeholder="نام کاربری"
            />
            <Input
              label="رمز عبور"
              type="password"
              name="password"
              value={inputValue.password}
              onChange={handleInputChange}
              errors={error}
              placeholder="******"
            />
            <div className="flex justify-between py-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-sm">
                  مرا به خاطر بسپار
                </label>
              </div>
              <p className="text-sm">فراموشی رمز عبور</p>
            </div>
            <button
              className="w-full p-3.5 text-sm text-white rounded-sm bg-lightOrange texy-center font-semibold outline-none hover:bg-orange-400 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? <div className="spinner"></div> : "ورود"}
            </button>
          </div>
        </form>

        <div className="relative z-10 w-full mt-6 text-center bg-white line">
          <span className="px-3 bg-white">یا وارد شوید با</span>
        </div>

        <div className="grid items-center grid-cols-3 gap-1 my-6">
          <div className="py-2.5 text-sm text-center text-white bg-blue-600 rounded-sm">
            Facebook
          </div>
          <div className="py-2.5 text-sm text-center text-white rounded-sm bg-cyan-500">
            Twiter
          </div>
          <div className="py-2.5 text-sm text-center text-white bg-red-600 rounded-sm">
            Google
          </div>
        </div>
        <p className="text-center">
          حساب کاربری ندارید؟ از اینجا
          <span className="text-lightOrange"> ثبت نام </span>
          کنید
        </p>
      </div>
    </>
  );
}
