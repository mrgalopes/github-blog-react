import styled, { css } from "styled-components";

export const PostCard = styled.div`
  display: flex;
  gap: 2rem;

  position: relative;

  max-width: 864px;
  width: 100%;
  margin: -5.5rem auto 0;

  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme.baseProfile};
  color: ${(props) => props.theme.baseTitle};

  border-radius: 10px;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 2.4375rem;
  }

  & > :last-child {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    span svg {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;

interface PostLinkProps {
  $position: "left" | "right";
}

export const PostLink = styled.a<PostLinkProps>`
  position: absolute;
  ${(props) => {
    if (props.$position === "left") {
      return css`
        left: 2rem;
      `;
    } else {
      return css`
        right: 2rem;
      `;
    }
  }}
  top: 2rem;

  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: bold;

  text-decoration: none;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
