import React from 'react'


//API
import API from '../API';

//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb'
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch'
//Image
import noImage from '../images/no_image.jpg'

const Home = () => {
    const { 
        state,
        loading,
        error, 
        setSearchTerm, 
        searchTerm,
        setIsLoadingMore
     } = useHomeFetch();
    const i = Math.ceil(Math.random() * 19)

    console.log(state)

    if(error) return <div>Something went wrong ...</div>

    return (
        <>

            {!searchTerm && state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[i].backdrop_path}`}
                    title={state.results[i].original_title}
                    text={state.results[i].overview}
                />
            }
            <SearchBar 
            setSearchTerm={setSearchTerm}
            />
            <Grid header={searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb 
                    key={movie.id}
                    clickable={true}
                    image={
                        movie.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : noImage
                    }
                    movieId={movie.id}
                    />
))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading &&
            <Button 
            text="Load More"
            callback={() => {setIsLoadingMore(true);}}
            />}
        </>
    );


};

export default Home;