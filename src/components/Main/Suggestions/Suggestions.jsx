import React from "react";
import './Suggestions.scss';
import Suggestion from "./Suggestion/Suggestion";
// import userImg1 from './../../../assets/imgs/suggestions/user-1.png'

const suggestion = {
    name: "Name Surname",
    nickname: '@nickname',
    avatarUrl: 'https://placekitten.com/g/64/64',
};
const Suggestions = () => {
    return (
        <div className="suggestions">
            <h1 className="title">Suggestions</h1>
            {/*<Suggestion  styles={{ backgroundImage:`url(${userImg1})`/>*/}
            <Suggestion />
            <Suggestion/>
            <Suggestion/>
            <Suggestion/>

        </div>
    )
};

export default Suggestions;