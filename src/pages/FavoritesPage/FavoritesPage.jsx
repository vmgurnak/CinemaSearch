import { useTranslation } from 'react-i18next';
import PageComponentFavorites from '../../components/PageComponentFavorites/PageComponentFavorites';

const FavoritesPage = () => {
  const { t } = useTranslation();
  return <PageComponentFavorites titlePage={t('favoritesMovies')} />;
};

export default FavoritesPage;
