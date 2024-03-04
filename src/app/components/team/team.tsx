import { HoverEffect } from "../card/card";

export function Team() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Team Member 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://test.com",
  },
  {
    title: "Team Member 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://stripe.com",
  },
  {
    title: "Team Member 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://facebook.com",
  },
  {
    title: "Team Member 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://google.com",
  },
  {
    title: "Team Member 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://tisk.com",
  },
  {
    title: "Team Member 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum laudantium omnis commodi minus eum eligendi inventore ipsa sit nisi ducimus atque voluptatem, similique numquam! Quibusdam ut iste reprehenderit adipisci!",
    link: "https://allure.com",
  },
];
