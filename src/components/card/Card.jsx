import s from "./Card.module.scss"

export const Card = ({ data }) => {
    return(
        <div className={s.card}>
            <h1 className={s.title}>{data.title}</h1>
            <p className={s.description}>{data.description}</p>
            <div className={s.imageContainer}>
                <img className={s.image} src={data.urlToImage} alt="card" />
                <div className={s.loader}></div>
            </div>
        </div>
    )
}
