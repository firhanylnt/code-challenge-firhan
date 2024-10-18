import Image from 'next/image';

export default function BannerHome() {
  return (
    <div className="relative w-full h-[70vh] md:h-screen">
      <div className="absolute inset-0">
        <Image 
          src="https://cdn.pixabay.com/video/2023/05/19/163784-828705241_tiny.jpg"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-4 md:text-center">
          {/* <h1 className="text-4xl font-bold md:text-6xl">GOJEK</h1> */}
          <p className="text-4xl md:text-5xl font-bold">
          3 negara. 20+ layanan.
          </p>
          <p className="text-4xl md:text-5xl font-bold">
          1 platform on-demand terkemuka.
          </p>
        </div>
      </div>
    </div>
  );
}
