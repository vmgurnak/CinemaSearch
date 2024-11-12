import { requestTopMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const TopMoviesPage = () => {
  return (
    <PageComponent requestMovie={requestTopMovie} titlePage="Top movies" />
  );
};

export default TopMoviesPage;
