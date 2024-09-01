import emailjs from "@emailjs/browser";

export default async function sendMail(e) {
  const response = await emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    e.target,
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }
  );
  if (response.text === "OK") {
    return "SUCCESS!";
  } else return "FAILED!";
}
