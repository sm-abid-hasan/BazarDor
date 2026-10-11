
const MESSAGES = {
  INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।",
  INVALID_PASSWORD: "পাসওয়ার্ড ভুল হয়েছে।",
  INVALID_EMAIL: "সঠিক ইমেইল লিখুন।",
  USER_NOT_FOUND: "এই ইমেইলে কোনো অ্যাকাউন্ট নেই।",
  USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে। অন্য ইমেইল দিন।",
  PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  PASSWORD_TOO_LONG: "পাসওয়ার্ড অনেক বড় হয়ে গেছে।",
};

export function authErrorMessage(error, fallback = "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।") {
  if (!error) return fallback;
  return MESSAGES[error.code] || fallback;
}

export function safeRedirect(path) {
  if (typeof path === "string" && path.startsWith("/") && !path.startsWith("//")) {
    return path;
  }
  return "/";
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
