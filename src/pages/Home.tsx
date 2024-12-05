import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1>{t("welcome")}</h1>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
    );
};

export default Home;
