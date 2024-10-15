import Link from "next/link";

export default function Testimoni() {
    return(
        <div className="mx-auto p-4">

            <h1 className="text-2xl md:text-5xl font-bold text-center p-4 m-[1em]">
                Pendapat mereka yang selalu menggunakan Gojek
            </h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*  */}
                <div className="bg-[#3ab05a] py-[1em] px-[1em] rounded-[15px] md:mt-[5em] md:mb-[5em]">
                    <h3 className="text-white mt-4 text-2xl font-bold">Agus</h3>
                    <p className='text-white mt-2'>
                    "Mau pergi ada goride atau gocar, mau makan ada gofood, pulsa abis beli pake gopay, kurang apa coba gojek ini?"
                    </p>
                </div>
                <div className="bg-[#3ab05a] py-[1em] px-[1em] rounded-[15px] md:mt-[5em] md:mb-[5em]">
                    <h3 className="text-white mt-4 text-2xl font-bold">Jody</h3>
                    <p className='text-white mt-2'>
                    "Setiap hari gofood dapet diskon terus huehuehue"
                    </p>
                </div>
                <div className="bg-[#3ab05a] py-[1em] px-[1em] rounded-[15px] md:mt-[5em] md:mb-[5em]">
                    <h3 className="text-white mt-4 text-2xl font-bold">Firhan</h3>
                    <p className='text-white mt-2'>
                    "Keluar kota gaperlu sewa mobil, pesen gocar langsung cus dapet diskon lagi hehe"
                    </p>
                </div>
                {/*  */}
            </div>
            
        </div>
    )
}