import axios  from "../../utils/axios";
import { loadMovie,removeMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id,type) => async(dispatch,getState) => {

    try {
        console.log(type)
        const details = await axios.get(`/${type}/${id}`)
        const externalId =  await axios.get(`/${type}/${id}/external_ids`)
        const recommendations = await axios.get(`/${type}/${id}/recommendations`)
        const similar = await axios.get(`/${type}/${id}/similar`)
        const videos = await axios.get(`/${type}/${id}/videos`)
        const watchProviders = await axios.get(`/${type}/${id}/watch/providers`)

        let TheCompleteDetails = {
            details: details.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m=>m.type === "Trailer"),
            watchProviders: watchProviders.data?.results?.IN,
        }
        console.log(TheCompleteDetails);
        dispatch(loadMovie(TheCompleteDetails))
        

    } catch (error) {
        console.log("Error: ", error)
        
    }
    
}