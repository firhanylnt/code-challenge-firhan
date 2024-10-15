import Link from "next/link";

export default function Services() {
    return(
        <div className="mx-auto p-4">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/*  */}
                <div className="bg-[#00880c] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#05aa15] rounded-[10%] mt-4">
                        <h1 className="text-2xl font-bold">gobox</h1>
                        <h1 className="text-2xl font-bold">goride</h1>
                        <h1 className="text-2xl font-bold">gobluebird</h1>
                        <h1 className="text-2xl font-bold">gosend</h1>
                        <h1 className="text-2xl font-bold">gocar</h1>
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">Transportasi & Logistik</h3>
                    <p className='text-white text-center mt-2'>
                    Mitra Driver kami sudah melakukan lebih dari 13.000 kali perjalanan bolak-balik antara bumi dan bulan.
                    </p>
                </div>
                <div className="bg-[#0093b2] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#06aed6] rounded-[10%] mt-4">
                        <h1 className="text-2xl font-bold">gopay</h1>
                        <h1 className="text-2xl font-bold">gosure</h1>
                        <h1 className="text-2xl font-bold">gopaylater</h1>
                        <h1 className="text-2xl font-bold">gotagihan</h1>
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">Pembayaran</h3>
                    <p className='text-white text-center mt-2'>
                    Dari belanja sampai donasi, kami bikin transaksi jadi mudah dan aman.
                    </p>
                </div>
                <div className="bg-[#af282f] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#ee2737] rounded-[10%] mt-4">
                        <h1 className="text-2xl font-bold">gomed</h1>
                        <h1 className="text-2xl font-bold">goshop</h1>
                        <h1 className="text-2xl font-bold">gofood</h1>
                        <h1 className="text-2xl font-bold">gomart</h1>
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">Pesan Makanan & Belanja</h3>
                    <p className='text-white text-center mt-2'>
                    Mau jajan atau belanja di minimarket? Gampang, tinggal pesan dari aplikasi dan tidak perlu keluar rumah.
                    </p>
                </div>
                <div className="bg-[#80286c] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#93328e] rounded-[10%] mt-4">
                        <h1 className="text-2xl font-bold">midtrans</h1>
                        <h1 className="text-2xl font-bold">gostore</h1>
                        <h1 className="text-2xl font-bold">moka</h1>
                        <h1 className="text-2xl font-bold">gobiz</h1>
                        <h1 className="text-2xl font-bold">selly</h1>
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">Business</h3>
                    <p className='text-white text-center mt-2'>
                    Manage your restaurants, run ads, create promos, and do more.
                    </p>
                </div>
                {/*  */}
            </div>
            
        </div>
    )
}