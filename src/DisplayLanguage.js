import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en:{SELECTED_LANGUAGE: 'Selected language: English'},
    it:{SELECTED_LANGUAGE: 'Lingua selezionata: Italiano'}
}
export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {language => {
                        return (
                            <h1>
                                {Strings[language].SELECTED_LANGUAGE}
                            </h1>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )    
    }
}