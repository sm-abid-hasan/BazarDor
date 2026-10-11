
export default function Avatar({ user, className = "h-10 w-10 text-base" }) {
  const letter = (user?.name || user?.email || "?").trim().charAt(0).toUpperCase();

  if (user?.image) {
    return (
      <img
        src={user.image}
        alt={user.name || "ব্যবহারকারী"}
        referrerPolicy="no-referrer"
        className={`${className} rounded-2xl object-cover`}
      />
    );
  }

  return (
    <span
      className={`${className} flex items-center justify-center rounded-2xl bg-primary font-bold text-primary-content`}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}
