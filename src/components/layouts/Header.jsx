import s from "./Header.module.scss"

export const Header = () => {
    return(
        <div className={s.header}>
            <h1 className={s.logo}>News</h1>
            <ul className={s.menu}>
                <li className={s.el}><button>Home</button></li>
                <li className={s.active}><button>News</button></li>
                <li className={s.el}><button>About</button></li>
                <li className={s.el}><button>Contacts</button></li>
            </ul>
            <button className={s.button}>READ</button>
        </div>
    )
}
