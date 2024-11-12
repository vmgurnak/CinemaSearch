import { requestPopularMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const PopularMoviesPage = () => {
  return (
    <PageComponent
      requestMovie={requestPopularMovie}
      titlePage="Popular movies"
    />
  );
};

export default PopularMoviesPage;
