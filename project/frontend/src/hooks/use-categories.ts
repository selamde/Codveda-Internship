import { getCategories } from "@/services/category-api"
import { useQuery } from "@tanstack/react-query"

export const useCategories = () =>{
    return useQuery({
        queryKey: ["Categories"],
        queryFn: getCategories
    })
}