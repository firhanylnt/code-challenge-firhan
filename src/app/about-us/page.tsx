import Teams from "@/views/pages/home/teams";

export default function AboutUs() {

    const historys = [
        {
            tahun: '2010',
            img: 'images/gojek-2010.svg',
            content: '20 ojek, 1 call center, dan 1 misi untuk menyelesaikan masalah masyarakat Indonesia. Gojek membuat jalanan Jakarta menjadi sebuah lautan hijau.',
        },
        {
            tahun: '2015',
            img: 'images/gojek-2015.svg',
            content: 'Aplikasi Gojek dibuat. Ada kenaikan pesanan dari 3,000 per hari jadi 10,000 per hari. Ekspansi ke luar kota. Lalu, kami melihat kesempatan untuk ekspansi ke ranah pesan antar makanan, penjualan tiket, dll. Dapat pendanaan Series A.',
        },
        {
            tahun: '2020',
            img: 'images/gojek-2020.svg',
            content: 'Menyatukan aplikasi Gojek di Indonesia, Singapura, Thailand, dan Vietnam.GoFood menjadi aplikasi paling berguna dan ramah pengguna di dunia selama pandemi. * Aplikasi Gojek diunduh lebih dari 190 juta kali.',
        },
        {
            tahun: '2021',
            img: 'images/gojek-2024.svg',
            content: 'Gojek dan Tokopedia bergabung menjadi GoTo, perusahaan teknologi terbesar di Indonesia dan menjadi ekosistem "go to" buat semua kebutuhan sehari-hari.',
        },
    ]

    const pilars = [
        {
            color: 'bg-[#7dcc6c]',
            title: 'Kecepatan',
            content: 'Bergerak cepat, mendorong batasan',
        },
        {
            color: 'bg-[#ff808b]',
            title: 'Inovasi',
            content: 'Menyelesaikan masalah dalam skala besar',
        },
        {
            color: 'bg-[#ffaf62]',
            title: 'Dampak Sosial',
            content: 'Mentransformasi hidup, menginspirasi perubahan',
        }
    ]

  return (
    <div className="">
      <h1 className="text-2xl text-white md:text-5xl font-bold text-center p-4 m-[2em]">
        Milestone
      </h1>

      <div className="container mx-auto grid grid-cols-1 gap-6 mb-[2em]">
        {historys && historys.map((history, idx) => (
            <div className="flex flex-row justify-center items-center text-white mt-4 gap-8" key={idx}>
                <h3 className="text-center text-[40px] font-semibold">{history.tahun}</h3>
                <img className="my-4" alt={`gojek-${history.tahun}`} width={300} height={300} src={history.img} />
                <div className="text-left">
                    <p>{history.content}</p>
                </div>
            </div>
        
        ))}
      </div>

      <div className="bg-white mx-auto p-4">
        
        <h1 className="text-2xl text-black md:text-5xl font-bold text-center p-4 m-[2em]">
            Tiga Pilar Gojek
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilars && pilars.map((pilar, idx) => (
                <div
                key={idx}
                className={`${pilar.color} py-[2em] px-[2em] rounded-[15px] md:mt-[5em] md:mb-[5em]`}>
                <h3 className="text-white mt-4 text-2xl font-bold text-left">
                {pilar.title}
                </h3>
                <p className="text-white mt-2 text-left">
                {pilar.content}
                </p>
            </div>
            
            ))}
        </div>
        
      </div>
      <Teams />
    </div>
    
  );
}
