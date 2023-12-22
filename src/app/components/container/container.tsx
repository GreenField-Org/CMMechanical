interface ContainerProps {
  children: React.ReactNode;
  center?: boolean;
  classes?: string;
}

export default function Container({
  children,
  center,
  classes,
}: ContainerProps) {
  return (
    <div
      className={`flex flex-col gap-12 lg:gap-20 ${
        center ? "item-center" : "items-start"
      } ${classes}`}
    >
      {children}
    </div>
  );
}
