export default function GifGridItem({id,title,url}){


    return(
        <>
        <div className="gif-card">
                <img className="img" src={url} alt={title} />
        </div>
        </>
    )

}