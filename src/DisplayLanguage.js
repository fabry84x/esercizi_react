import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en:{SELECTED_LANGUAGE: 'Selected language: English'},
    it:{SELECTED_LANGUAGE: 'Lingua selezionata: Italiano'}
}
export function DisplayLanguage () {
    const language = useContext(LanguageContext)
    return <h1>{Strings[language].SELECTED_LANGUAGE}</h1>    
}