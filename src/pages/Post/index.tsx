import { useParams } from "react-router-dom";

export function Post() {
  const { slug } = useParams();

  return <p>Post: {slug}</p>;
}
