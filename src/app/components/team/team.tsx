export default function Team() {
  return (
    <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
      <div className="flex flex-col items-start gap-3 self-stretch lg:w-[768px] lg:gap-4">
        <p className="text-base not-italic font-semibold leading-[150%]">
          {"Experienced"}
        </p>
        <div className="flex flex-col items-start lg:items-center lg:gap-5 self-stretch">
          <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
            {"Meet Our Team"}
          </h2>
          <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
            {"Our team members are experts in their respective fields."}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-14 self-stretch lg:gap-24">
        <div className="flex flex-col items-start gap-12 lg:gap-16 self-stretch">
          {/* Team Members */}
        </div>
      </div>
    </div>
  );
}
