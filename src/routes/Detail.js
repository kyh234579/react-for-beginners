import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie2 from "../components/Movie2";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null); // 단일 영화 객체를 저장할 상태
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie); // 단일 영화 데이터로 설정
        setLoading(false); // 로딩 완료
    };

    useEffect(() => {
        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                movie && (
                    <Movie2
                        id={movie.id}
                        background_image={movie.background_image}
                        title={movie.title}
                        date_uploaded={movie.date_uploaded}
                        rating={movie.rating}
                        like_count={movie.like_count}
                    />
                )
            )}
        </div>
    );
}

export default Detail;
