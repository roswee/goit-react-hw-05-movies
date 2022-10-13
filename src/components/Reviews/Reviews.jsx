import {fetchReviews} from "services/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    const renderReviews = async id => {
        try {
          const result = await fetchReviews(id);
          setReviews(result);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        renderReviews(id)
      }, [id])

      return (
        <ul>
        {reviews.length > 0?
        reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h4>{author}</h4>
                <span>{content}</span>
              </li>
            ))
        : `nothing here`}
      </ul>
      )
}