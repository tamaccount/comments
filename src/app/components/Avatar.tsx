import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function Avatar({ src, alt, width, height }: AvatarProps) {
  return (
    <div className="relative size-6 overflow-hidden rounded-full border-2 border-amber-700">
      <Image src={src} alt={alt} width={width} height={height} className="size-full object-cover" />
    </div>
  );
}
