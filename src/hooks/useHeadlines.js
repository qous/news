import { useQuery } from "@tanstack/react-query"
import { news } from "../api/index.js"

export const useHeadlines = (params) => {
    return useQuery({
        queryKey: ['news', params],
        queryFn: () => news.getHeadlines(params),
        select: data => data.data
    })
}
