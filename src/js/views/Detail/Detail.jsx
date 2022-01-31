import React, { useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { getDetailAnime } from "../../service/anime";
import { Context } from "../../store/appContext";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Detail = () => {

    const { id } = useParams();
    const {store, actions} = useContext(Context);

    const [loading, setLoading] = useState(true);
    console.log(store.anime.trailer);

    const getAnime =  async () => {
        try{
            console.log("fetch anime")
            console.log(id);
            const res =  await getDetailAnime(id);
            const json = await res.json();
            console.log(json)
            actions.setAnime(json.data);
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getAnime();
    }, [])
    console.log(loading)
    return (
        <>
        {loading ? <Spinner /> : 
            (
            <div className="col-md-12">
                <div className="row">
                    <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
        
                            height="600"
                            src={store.anime.trailer.embed_url}>
                    </iframe>
                </div>
            </div>
            )
        
        }
        
        </>
    )
}

export default Detail;