import React from "react";

export default class Popular extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            selectedLanguage: 'All'
        }
    }
    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
    }
    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return(
            <ul className={'flex-container'}>
                {languages.map((language)=> (
                    <li key={language}>
                        <button
                            onClick={()=> this.updateLanguage(language)}
                            className={'btn-clear nav-link'}
                            style={language === this.state.selectedLanguage ? {color:'rgba(187, 46, 31)'} : null}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}