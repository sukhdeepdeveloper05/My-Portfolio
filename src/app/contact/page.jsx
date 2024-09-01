"use client";

import SendIcon from "@/assets/icons/Send";
import sendMail from "@/util/sendMail";
import { useState } from "react";

export default function ContactPage() {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  async function checkValidation(e) {
    e.preventDefault();
    setIsSending(true);

    const formData = Object.fromEntries(new FormData(e.target));

    if (formData.name.trim() === "") {
      setIsNameValid(false);
    }
    if (formData.message.trim() === "") {
      setIsMessageValid(false);
    }
    if (formData.email.trim() === "" || !formData.email.includes("@")) {
      setIsEmailValid(false);
    }

    if (
      formData.name.trim() === "" ||
      formData.message.trim() === "" ||
      formData.email.trim() === "" ||
      !formData.email.includes("@")
    ) {
      setIsSending(false);
      return;
    }

    const response = await sendMail(e);
    if (response === "SUCCESS!") {
      setIsSending(false);
      setMailSent(true);

      setTimeout(() => {
        setMailSent(false);
      }, 10000);
    }
  }

  return (
    <div className="h-full md:p-8 p-4 flex flex-col justify-center">
      <h1 className="text-center text-4xl font-bold md:mb-8 mb-4">Contact me</h1>
      <div className="flex items-start justify-center">
        <form
          action="/"
          method=""
          onSubmit={(e) => checkValidation(e)}
          className="w-[clamp(400px,550px,80%)] min-h-60 bg-[#25262a36] rounded-lg p-7 border-[1px] border-[#2f3037] shadow-[#37373866_0px_2px_40px_10px] flex flex-col md:gap-5 gap-2 max-md:text-xs text-base"
        >
          <div className="flex md:gap-5 gap-2 max-md:flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`w-full bg-transparent border-[1px] border-[#2f3037] rounded-md px-2 py-1 outline-none transition-all duration-200 ${
                isNameValid
                  ? "border-[#2f3037] focus:border-[#545456]"
                  : "border-[#a94545] animate-shake"
              }`}
              onChange={() => {
                setIsNameValid(true);
              }}
              required
              autoComplete="off"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E mail"
              className={`w-full bg-transparent border-[1px] rounded-md px-2 py-1 outline-none transition-all duration-200 ${
                isEmailValid
                  ? "border-[#2f3037] focus:border-[#545456]"
                  : "border-[#a94545] animate-shake"
              }`}
              onChange={() => {
                setIsEmailValid(true);
              }}
              required
              autoComplete="off"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className={`bg-transparent border-[1px] border-[#2f3037] rounded-md px-2 py-1 outline-none transition-all duration-200 md:h-44 h-20 ${
              isMessageValid
                ? "border-[#2f3037] focus:border-[#545456]"
                : "border-[#a94545] animate-shake"
            }`}
            onChange={() => {
              setIsMessageValid(true);
            }}
            required
          ></textarea>
          <button
            type="submit"
            className={`flex items-center justify-center gap-1 bg-[#d5d4e2] text-black font-bold rounded-md py-2 disabled:opacity-80 text-opacity-85 hover:text-opacity-100 hover:shadow-[#37373866_0px_2px_20px_5px] transition-all duration-200`}
            disabled={
              !isNameValid || !isEmailValid || !isMessageValid || mailSent
            }
          >
            {isSending ? (
              "Sending..."
            ) : (
              <>
                <span>Send Message</span>
                <SendIcon className="-mb-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
