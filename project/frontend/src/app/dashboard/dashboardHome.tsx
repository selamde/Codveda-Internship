import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { getProducts } from "@/services/product-api";

import { useQuery } from "@tanstack/react-query"

const DashboardHome = () => {
    const {
        data: products = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey:["products"],
        queryFn: getProducts
    });
    if(isLoading){
        return <div className="p-6">Loading Products...</div>
    }

    if(isError){
        return <div className="p-6 text-desructive">{error.message}</div>
    }

  return (
   <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            
              <DataTable data={products} />
            </div>
            
          </div>
        </div>
  )
}

export default DashboardHome