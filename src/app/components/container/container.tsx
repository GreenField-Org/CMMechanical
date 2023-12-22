interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Container({ children, center }: ContainerProps) {
  return (
    <div
      className={`flex flex-col ${
        center ? "items-center" : "items-start"
      } gap-12 self-stretch lg:flex-row lg:gap-20`}
    >
      {children}
    </div>
  );
}
