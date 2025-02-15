//displays champion information

import {Champion} from "../interfaces/Champions.ts"

// single tag is xml ends with />
export default function Display(props : { data:Champion[] }) {
    return (
        <div>
            {
                props.data.map((char: Champion) => (
                    <div key={char.id}>
                        <h1>{char.name}</h1>
                        <img src={char.image} alt={`an image of ${char.name}`}/>
                        <p>{char.blurb}</p>
                    </div>

                ))
            }
            
        </div>
    );
}