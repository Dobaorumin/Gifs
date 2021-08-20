import cargando from "../public/cargando.gif"
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({category}){


    const {data,loading } = useFetchGifs(category);
    


    return (
        <>
        {loading && <img className="cargando" src={cargando} alt="cargando"></img>}
             {data.map((img) => {
                return (
                    <>
                    <div>
                    <ul>
                    <GifGridItem key={img.id} {...img}/>
                    </ul>
                    </div>
                    </>
                )
            })} 
        </>
    )
}