import { requestUpcomingMovie } from '../../services/api';

import PageComponent from '../../components/PageComponent/PageComponent.jsx';

const UpcomingMoviesPage = () => {
  return (
    <PageComponent requestMovie={requestUpcomingMovie} titlePage="Upcoming" />
  );
};

export default UpcomingMoviesPage;
