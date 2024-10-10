import Image from 'next/image';

export default function CompanyOverview() {
  return (
    <>
        <div className="mx-auto p-4">

            <h1 className="text-2xl md:text-4xl font-bold text-center p-4 m-[1em]">Kenalin, Gojek. Si Pembawa Perubahan</h1>

            <div className="bg-white shadow-md rounded-tr-[8%] rounded-tl-[8%] p-6 mb-8 w-full">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="p-4 text-center">
                        <Image
                        src="/images/medal.png"
                        alt="Service 1"
                        width={200}
                        height={200}
                        className="mx-auto"
                        />
                        <h3 className="text-black mt-4 text-xl font-semibold">Fortune Top 20</h3>
                        <p className="text-black mt-2">Satu satunya perusahaan di Asia Tenggara yang dua kali berada di daftar perusahaan pengubah dunia versi majalah Fortune</p>
                    </div>

                    <div className="p-4">
                        <Image
                        src="/images/money.png"
                        alt="Service 2"
                        width={200}
                        height={200}
                        className="mx-auto"
                        />
                        <h3 className="text-black mt-4 text-xl font-semibold">Berkontribusi lebih dari $7.1 trilliun</h3>
                        <p className="text-black mt-2">Penggerak roda perekonomian indonesia</p>
                    </div>

                    <div className="p-4">
                        <Image
                        src="/images/gogreen.png"
                        alt="Service 3"
                        width={200}
                        height={200}
                        className="mx-auto"
                        />
                        <h3 className="text-black mt-4 text-xl font-semibold">Jaket hijau, pergerakan juga hijau</h3>
                        <p className="text-black mt-2">gojek mengurangi pemakaian plastik hingga 11.3ton sejak Oktober 2020</p>
                    </div>

                    <div className="p-4">
                        <Image
                        src="/images/growth.png"
                        alt="Service 4"
                        width={200}
                        height={200}
                        className="mx-auto"
                        />
                        <h3 className="text-black mt-4 text-xl font-semibold">Tumbuh 80% sejak pandemi</h3>
                        <p className="text-black mt-2">Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM</p>
                    </div>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold text-center p-4 m-[2em]">Skala Kami</h1>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Image
                        src="/images/service1.jpg"
                        alt="Service 1"
                        width={400}
                        height={300}
                        className="rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Service 1</h3>
                        <p className="text-gray-600 mt-2">Description of Service 1</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Image
                        src="/images/service2.jpg"
                        alt="Service 2"
                        width={400}
                        height={300}
                        className="rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Service 2</h3>
                        <p className="text-gray-600 mt-2">Description of Service 2</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Image
                        src="/images/service3.jpg"
                        alt="Service 3"
                        width={400}
                        height={300}
                        className="rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Service 3</h3>
                        <p className="text-gray-600 mt-2">Description of Service 3</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <Image
                        src="/images/service4.jpg"
                        alt="Service 4"
                        width={400}
                        height={300}
                        className="rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Service 4</h3>
                        <p className="text-gray-600 mt-2">Description of Service 4</p>
                    </div>
                </div>
            </div>

            

            </div>
    </>
    
  );
}
