import { useTranslation } from "react-i18next";

import { Todos } from "../../components/Todos/Todos";
import styles from "./Home.module.scss";

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.home}>
            <h1>{t("welcome")}</h1>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <Todos />
        </div>
    );
};

export default Home;
