import {
  HomeContainer,
  SearchInput,
  SearchContainer,
  CardContainer,
  Card,
} from "./styles";

import {
  ProfileCard,
  ProfileLink,
  ProfileText,
} from "../../components/Profile";
import { TextM, TextS, TitleL, TitleM, TitleS } from "../../styles/mixins";
import avatarImg from "../../assets/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard>
        <img src={avatarImg} alt="" />
        <ProfileText>
          <TitleL>Cameron Williamson</TitleL>

          <TextM>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </TextM>

          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <TextM $variant="baseSubtitle">cameronwll</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <TextM $variant="baseSubtitle">Rocketseat</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <TextM $variant="baseSubtitle">32 seguidores</TextM>
            </span>
          </div>
        </ProfileText>
        <ProfileLink href="https://github.com">
          <span>GITHUB</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ProfileLink>
      </ProfileCard>

      <SearchContainer>
        <div>
          <TitleS>Publicações</TitleS>
          <TextS>6 publicações</TextS>
        </div>

        <SearchInput type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <CardContainer>
        {[1, 2, 3, 4, 5].map((c) => (
          <Card key={c}>
            <TitleM>JavaScript data types and data structures</TitleM>
            <TextS>Há 1 dia</TextS>
            <TextM>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a booleanProgramming languages all have
              built-in data structures, but these often differ from one language
              to another. This article attempts to list the built-in data
              structures available in JavaScript and what properties they have.
            </TextM>
          </Card>
        ))}
      </CardContainer>
    </HomeContainer>
  );
}
