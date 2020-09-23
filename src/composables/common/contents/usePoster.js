export default function usePoster() {
  const toDetail = ({ isMovie, id }, { push }) => {
    if (isMovie) push(`/movie/${id}`);
    else push(`/show/${id}`);
  };

  return {
    toDetail
  };
}
