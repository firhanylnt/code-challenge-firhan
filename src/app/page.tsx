import Footer from "@/views/components/footer";
import BannerHome from "@/views/pages/home/banner";
import CompanyOverview from "@/views/pages/home/company-overview";
import Services from "@/views/pages/home/services";
import Teams from "@/views/pages/home/teams";
import Testimoni from "@/views/pages/home/testimoni";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BannerHome />
      <CompanyOverview />
      {/* services */}
        <h1 className="text-2xl md:text-5xl font-bold text-center p-4 m-[2em]">
            Kami membangun layanan untuk<br /> membantumu melewati halangan
        </h1>
        <div className="text-center">
            <Link href="/services">
                <button className="border-1 bg-[#00880c] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Lihat Semua Layanan</button>
            </Link>
            
        </div>
      <Services />
      {/* serviecs */}
      <Testimoni />
      <Teams />
      <Footer />
    </>
  );
}
