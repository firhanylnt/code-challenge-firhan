import contentfulClient from "@/contentful/contentfulClient";
import { IAsset, TypeBlogSkeleton, TypeCompanyOverviewSkeleton } from "@/contentful/types/blog.types";
import RichText from '@/views/components/richText';

const getOverview = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeCompanyOverviewSkeleton>({
      content_type: 'companyOverview',
      "fields.category": 'overview',
      order: ['sys.createdAt']
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}

const getServices = async () => {
    try {
      const data = await contentfulClient.getEntries<TypeCompanyOverviewSkeleton>({
        content_type: 'companyOverview',
        "fields.category": 'services',
        order: ['sys.createdAt']
      });
      return data;
    } catch (error) {
      console.log(error)
    }
}

export default async function CompanyOverview() {
    const overviews = await getOverview();
    const services = await getServices()
  return (
    <>
        <div className="mx-auto p-4">

            <h1 className="text-2xl md:text-4xl font-bold text-center p-4 m-[1em]">Kenalin, Gojek. Si Pembawa Perubahan</h1>

            <div className="bg-white shadow-md rounded-t-[5px] rounded-b-[5px] md:rounded-t-[8%] md:rounded-b-[8%] p-8 mb-8 w-full md:mt-[10em]">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                {overviews && overviews.items?.map((overview, idx) => (
                    <div className="p-4 text-center md:mt-[-6em]" key={idx}>
                        <img className="mx-auto" alt={overview.fields.title} width={200} height={200} src={`https:${(overview.fields.media as IAsset).fields.file.url}`} />
                        <h3 className="text-black mt-4 text-xl font-semibold">{overview.fields.title}</h3>
                        <div className='text-black'>
                            <RichText document={overview.fields.content} />
                        </div>
                    </div>
                ))}

                </div>

                <h1 className="text-4xl md:text-4xl font-bold text-black text-center p-4 my-[2em]">Skala Kami</h1>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services && services.items?.map((service, idx) => (
                        <div className={`bg-[#65d75d] py-[2em] md:py-0 px-[3em] rounded-[10%] shadow- md:h-[25vw] md:mt-[5em] md:mb-[5em]`} key={idx}>
                            <img className="mx-auto md:mt-[-5em]" alt={`gojek-`+service.fields.title} width={400} height={400} src={`https:${(service.fields.media as IAsset).fields.file.url}`} />
                            <h3 className="text-black mt-4 text-[40px] font-semibold md:mt-[2em]">{service.fields.title}</h3>
                            <div className='text-black'>
                                <RichText document={service.fields.content} />
                            </div>
                        </div>
                    ))}
                    
                </div>

                <h1 className="text-4xl md:text-4xl font-bold text-black text-center p-4 my-[1em]">Kerja di Gojek itu beda karena ...</h1>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[3em]">

                    <div className="relative rounded-[40px] overflow-hidden">
                        <img src="/images/culture1.jpg" alt="culture1" className="filter brightness-50 lg:aspect-auto w-full" />
                        <div className="absolute w-full h-full z-20 p-8 lg:p-10 flex flex-col justify-end bottom-0">
                            <div className="lg:flex lg:justify-between w-full">
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">Kolaborasi Antar Budaya</h1>
                                    <p>Bisa kerjasama dengan GoTroops dari berbagai negara!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden">
                        <img src="/images/culture2.jpg" alt="culture2" className="filter brightness-50 lg:aspect-auto w-full" />
                        <div className="absolute w-full h-full z-20 p-8 lg:p-10 flex flex-col justify-end bottom-0">
                            <div className="lg:flex lg:justify-between w-full">
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">Asuransi kesehatan buat ayah ibu</h1>
                                    <p>Subsidi asuransi kesehatan buat kedua orang tuamu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden">
                        <img src="/images/culture3.jpg" alt="culture3" className="filter brightness-50 lg:aspect-auto w-full" />
                        <div className="absolute w-full h-full z-20 p-8 lg:p-10 flex flex-col justify-end bottom-0">
                            <div className="lg:flex lg:justify-between w-full">
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">Bermacam macam subsidi</h1>
                                    <p>Mau beli buku, daftar gym membership, isi pulsa? Gojek bisa kasih subsidi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

         </div>
    </>
    
  );
}
