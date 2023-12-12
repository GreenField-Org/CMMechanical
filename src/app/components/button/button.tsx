interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullwidth?: boolean;
}

export default function Button({
  buttonText,
  variant,
  fullwidth,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 border px-6 py-3 border-solid border-primary ${
        variant === "primary" ? "bg-primary" : "bg-none"
      } rounded-2xl hover:bg-secondary ${fullwidth ? "w-full" : ""}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
