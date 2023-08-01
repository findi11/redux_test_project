import {persistor} from '../../store/index';
import {
  Container,
  Favourite_left,
  Favourite_right,
  Favourite_container,
  Film_item,
} from "../../utils/style";

function Favourite() {
  const videos = [
    {
      id: 1,
      title: "Термінатор",
      description: "Чудова кіноха для всього того що хочеш",
      img: "https://media.istockphoto.com/id/520258723/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B1%D0%B8%D0%B2%D1%87%D0%B0-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=9Cv1xdxluxB2ll-R7T2eb8KxJqLxB7tO9p3wQwWkNF8=",
      // link: "/films/terminator",
    },
    {
      id: 2,
      title: "Термінатор",
      description: "Чудова кіноха для всього того що хочеш",
      img: "https://media.istockphoto.com/id/520258723/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B1%D0%B8%D0%B2%D1%87%D0%B0-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=9Cv1xdxluxB2ll-R7T2eb8KxJqLxB7tO9p3wQwWkNF8=",
      // link: "/films/terminator",
    },
    {
      id: 3,
      title: "Термінатор",
      description: "Чудова кіноха для всього того що хочеш",
      img: "https://media.istockphoto.com/id/520258723/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B1%D0%B8%D0%B2%D1%87%D0%B0-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=9Cv1xdxluxB2ll-R7T2eb8KxJqLxB7tO9p3wQwWkNF8=",
      // link: "/films/terminator",
    },
  ];
  // function setFavourite(id: number) {
  //   const videoToAdd = videos.find((video) => video.id === id);
  //   if (videoToAdd) {
  //     // Отримали обраний відео, тепер додаємо його до персист сторіджу
  //     persistor.updateState((state) => {
  //       return {
  //         ...state,
  //         favouriteVideos: [...state.favouriteVideos, videoToAdd],
  //       };
  //     });
  //   }
  // }
  return (
    <>
      <Container>
        <Favourite_container>
          <Favourite_left>
            {videos.map((video) => (
              <Film_item key={video.id}>
                <img src={video.img} alt={video.title} />
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                {/* <button onClick={() => setFavourite(video.id)}></button> */}
              </Film_item>
            ))}
          </Favourite_left>
          <Favourite_right>asasa</Favourite_right>
        </Favourite_container>
      </Container>
    </>
  );
}

export default Favourite;
