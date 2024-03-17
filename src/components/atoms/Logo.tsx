import Image from 'next/image';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image src="/logo2.png" alt="logo" width={300} height={200} />
  </span>
);

export default Logo;
