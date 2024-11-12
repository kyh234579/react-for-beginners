import PropTypes from "prop-types";

function Movie2({id,
    background_image,title,date_uploaded,rating,like_count}){
    return (
        <div>
            <img src={background_image} alt={title} />
            <h2>{title}</h2>
            <p>{date_uploaded}</p>
            <p>{rating}</p>
            <p>{like_count}</p>
          </div>
    );
}
Movie2.propTypes={
    id: PropTypes.number.isRequired,
    background_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date_uploaded: PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    like_count:PropTypes.number.isRequired
};
export default Movie2;