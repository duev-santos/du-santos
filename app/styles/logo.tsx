import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative mt-2 h-28 w-auto flex items-center justify-center">
      <Image
        src="/logo-du.svg"
        alt="Logo Du Santos"
        width={380}
        height={110}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
