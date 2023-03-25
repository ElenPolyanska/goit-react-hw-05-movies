import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Layout } from './Layout';
import { MovieDetails } from '../pages/MovieDetails';
import { Movie } from '../pages/Movie';
import { Cast } from './Cast';
import { CastTV } from './CastTV';
import { Reviews } from './Reviews';
import { ReviewsTV } from './ReviewsTV';
import { SearchList } from 'pages/SearchList';
import { TVdetails } from 'pages/TVdetails';

import { Series } from 'pages/Series';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/tv" element={<Series />} />
        <Route path="/tv/:id" element={<TVdetails />}>
          <Route path="cast" element={<CastTV />} />
          <Route path="reviews" element={<ReviewsTV />} />
        </Route>
        <Route path="/search" element={<SearchList />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
