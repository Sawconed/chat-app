import Image from "next/image";

type Props = {
  size?: number;
}

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image src="/logo.svg" alt="Logo" width={size} height={size} className="animate-pulse duration-700" />
    </div>
  )
}

export default LoadingLogo;
