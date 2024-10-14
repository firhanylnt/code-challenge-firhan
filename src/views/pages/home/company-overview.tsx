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

            <div className="bg-white shadow-md rounded-tr-[8%] rounded-tl-[8%] p-6 mb-8 w-full md:mt-[10em]">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                {overviews && overviews.items?.map((overview, idx) => (
                    <div className="p-4 text-center md:mt-[-6em]" key={idx}>
                        <img className="mx-auto" width={200} height={200} src={`https:${(overview.fields.media as IAsset).fields.file.url}`} />
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
                        <div className={`bg-[${service.fields.color}] py-[2em] md:py-0 px-[3em] rounded-[10%] shadow-md md:h-[25vw] shadow-red md:mt-[5em]`} key={idx}>
                            <img className="mx-auto md:mt-[-5em]" width={400} height={400} src={`https:${(service.fields.media as IAsset).fields.file.url}`} />
                            <h3 className="text-black mt-4 text-[40px] font-semibold md:mt-[2em]">{service.fields.title}</h3>
                            <div className='text-black'>
                                <RichText document={service.fields.content} />
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            

         </div>
    </>
    
  );
}
