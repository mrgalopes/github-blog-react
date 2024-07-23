import styled from "styled-components";

export const ProfileCard = styled.div`
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

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 0.5rem;
  }

  & > :nth-child(2) {
    margin-top: 0.5rem;
  }

  & > :last-child {
    margin-top: 1.5rem;
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

export const ProfileLink = styled.a`
  position: absolute;
  right: 2rem;
  top: 2.5rem;

  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: bold;

  text-decoration: none;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
