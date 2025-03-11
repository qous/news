import { useEffect, useState } from "react"
import { Card } from "../components/card/Card"
import { useHeadlines } from "../hooks/useHeadlines"

export const News = () => {
    const [shownCard, setShownCard] = useState(0)
    const { data: news, isFetched } = useHeadlines()

    useEffect(() => {
        if (isFetched && news.articles.length > 0) {
            const interval = setInterval(() => {
                setShownCard((prev) => (prev + 1) % news.articles.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isFetched]);

    return(
        <div className="wrapper">
            <div className="location">
                <h1 className="country">Us</h1>
            </div>
            {isFetched && news.articles.map((el, id) => {
                return (
                    <>
                        {shownCard === id && <Card data={el} />}
                    </>
                )
            })}
        </div>
    )
}