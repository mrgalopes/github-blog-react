// import { useParams } from "react-router-dom";
import { PostCard, PostLink, PostText } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { TextM, TitleL } from "../../styles/mixins";

export function Post() {
  // const { slug } = useParams();

  return (
    <>
      <PostCard>
        <PostLink $position="left">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </PostLink>
        <PostLink $position="right" href="https://github.com">
          <span>GITHUB</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </PostLink>
        <PostText>
          <TitleL>JavaScript data types and data structures</TitleL>

          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <TextM $variant="baseSpan">cameronwll</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <TextM $variant="baseSpan">Rocketseat</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <TextM $variant="baseSpan">32 seguidores</TextM>
            </span>
          </div>
        </PostText>
      </PostCard>
    </>
  );
}
