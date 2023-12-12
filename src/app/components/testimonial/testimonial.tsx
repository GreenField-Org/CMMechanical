export interface TestimonialProps {
  comment: string;
  name: string;
  title: string;
}

export default function Testimonial({
  comment,
  name,
  title,
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex items-start gap-1">{/*stars*/}</div>
      <h6 className="self-stretch text-lg not-italic font-bold leading-[140%]">
        {comment}
      </h6>
      <div className="flex flex-col items-start gap-4">
        <div className="w-14 h-14 rounded-[56px] bg-cyan-600"></div>
        <div className="flex flex-col items-start">
          <p className="text-base not-italic font-semibold leading-[150%]">
            {name}
          </p>
          <p className="text-base not-italic font-normal leading-[150%]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
