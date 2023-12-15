interface MemberProps {
  name: string;
  role: string;
  bio: string;
}

export default function TeamMember({ name, role, bio }: MemberProps) {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6 lg:flex-[1_0_0]">
      <div className="h-[221px] lg:h-[405px] self-stretch"></div>
      <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
        <div className="flex flex-col items-center self-stretch">
          <p className="self-stretch text-lg not-italic font-semibold leading-[150%]">
            {name}
          </p>
          <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
            {role}
          </p>
        </div>
        <p className="self-stretch text-base not-italic font-normal leading-[150%]">
          {bio}
        </p>
      </div>
      <div className="flex items-start gap-3.5 pt-1">
        {/* Social Media Links */}
      </div>
    </div>
  );
}
