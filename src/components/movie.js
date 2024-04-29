import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsPinAngle } from 'react-icons/bs';
import {Glyphicon, Panel} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

// support routing

function Movie(props) {
    const [selectedMovie] = useState(props.selectedMovie);
    const params = useParams();
    const movieId = params.movieId;
    console.log(movieId);
    const dispatch = useDispatch();
    if (selectedMovie == null) {
        dispatch(fetchMovie(movieId));
    }

    return (<MovieDetail movieId={movieId} />)
}

export default Movie;