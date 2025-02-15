import { useEffect, useState } from 'react'
import { Champion } from '../interfaces/Champions.ts';
import Display from "../components/Display.tsx";
import styled from "styled-components";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
`;

export default function ChampionFetcher() {
  // useState hook that manages state of component
  // data = last state, stores array of champions
  // setData = function that updates last state(data)
  //useState<Champion[]>([]) = initialize data as empty array of Champion objects
  const [data, setData] = useState<Champion[]>([]);

  // useEffect hook accepts anonymous function that returns an object
  useEffect(() => {
    async function fetchData(): Promise<void> {
      // fetchs raw JSON data from LoL champion API
      const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
      // extract result from the object, this is call string deconstruction
      const result = await rawData.json();
      
      // since LoL API has champions stored in an object instead of a simple list, we have to 
      // transfrom the object into array of champion values or champion info with a for loop
      const championsArray: Champion[] = []; // initialize empty array
      const championData = result.data; // stores the data object

      // loop through each key which is the champion's name and add the corresponding values to array
      for (const key in championData) {
        const champ = championData[key];
        championsArray.push ({
          id: champ.id,
          name: champ.name,
          title: champ.title,
          blurb: champ.blurb, 
          image: `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champ.image.full}`,
        });
      }
     
      // updates the state using setData
      setData(championsArray);
    }
    //error handling 
    fetchData()
      .then(() => console.log("Data feteced, no error"))
      .catch((e: Error) => console.log("error" + e))
    }, [data.length]);
    // if data's length changes add new result

    // renders UI
    return (
      <ParentDiv>
        <Display data={data}/>
      </ParentDiv>
    )
}