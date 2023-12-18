interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch lg:flex-row lg:gap-20">
      {children}
    </div>
  );
}
