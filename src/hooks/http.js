import { useState, useEffect } from 'react';
/**
 * Custom Fetch Hook using Fetch API. Returns Fetched Data and Loading Status.
 */
export const useHttp = (url, dependencies) => {
    //Hooks for Fetched Data and Loading boolean
    const [fetchedData, setFetchedData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        //Setting Loading status to true
        setIsLoading(true);

        console.log('Sending Http request to URL: ' + url);

        //Fetch Api Fetching Data from URL argument
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data=> {
            //Setting Loading status to false
            setIsLoading(false);
            //Storing Fetched Data to fetchedData state
            setFetchedData(data);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, dependencies)

    return [isLoading, fetchedData]
}