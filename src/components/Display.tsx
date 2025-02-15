//displays champion information

import {Champion} from "../interfaces/Champions.ts";
import styled from "styled-components";

// styling for all champions
const AllChampDiv = styled.div`
    display: flex; 
    flex-direction: column;
    background-color: #FBF5DD;
`;

// styling for single champion
const SingleChampDiv = styled.div`
    font-family: "Gill Sans", sans-serif;
    color: #1E2022;
    font-size: calc(5px + 1vw);
    padding: 1vh 1vw;
    border: #252A34 3px solid;

`;

// styling for champion name
const ChampNameDiv = styled.h1`
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(1px + 2vw);
    margin: 1vh;
    padding: 2vh 2vw;
`;

// styling for champion title
const ChampTitleDiv = styled.h2`
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: calc(2px + 1vw);
    margin: 1vh;
    padding: 1vh;
`;

// styling for champion avators
const ChampImg = styled.img`
    width: 18%;
    padding: 0.5vw;
    margin: 1vh 1vw;
    border-radius: calc(1px + 1vw);
    height: auto;
`;

// create a container for the images to be centered
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1vh;
`;

// single tag is xml ends with />
export default function Display(props : { data:Champion[] }) {
    return (
        <AllChampDiv>
            {
                props.data.map((char: Champion) => (
                    <SingleChampDiv key={char.id}>
                        <ChampNameDiv>{char.name}</ChampNameDiv>
                        <ImgContainer>
                            <ChampImg src={char.image} alt={`an image of ${char.name}`}/>
                        </ImgContainer>
                        <ChampTitleDiv>{char.title}</ChampTitleDiv>
                        <p>{char.blurb}</p>
                    </SingleChampDiv>

                ))
            }
            
        </AllChampDiv>
    );
}