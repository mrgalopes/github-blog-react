import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HomeContainer = styled.div`
  padding-bottom: 15rem;
`

export const ProfileCard = styled.div`
  display: flex;
  gap: 2rem;

  position: relative;

  max-width: 864px;
  width: 100%;
  margin: -5.5rem auto 0;

  padding: 2rem 2.5rem;

  background-color: ${props => props.theme.baseProfile};
  color: ${props => props.theme.baseTitle};

  border-radius: 10px;
`

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
      color: ${props => props.theme.baseLabel};
    }
  }
`

export const ProfileLink = styled.a`
  position: absolute;
  right: 2rem;
  top: 2.5rem;

  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: bold;

  text-decoration: none;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const TitleL = styled.h1`
  color: ${props => props.theme.baseTitle};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.3;
`

export const SearchContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 4.5rem auto 0;

  div {
    display: flex;
    justify-content: space-between;
  }

`

export const TitleS = styled.span`
  color: ${props => props.theme.baseSubtitle};
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: bold;
`

export const TextS = styled.span`
  color: ${props => props.theme.baseSpan};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 500;
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;

  background-color: ${props => props.theme.baseInput};
  color: ${props => props.theme.baseText};

  &::placeholder {
    color: ${props => props.theme.baseLabel};
  }

  border-radius: 6px;
  border: 1px solid ${props => props.theme.baseBorder};
  outline: none;

  &:focus {
    border: 1px solid ${props => props.theme.blue};
  }
`

export const CardContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 3rem auto 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const Card = styled.div`
  max-height: 16.25rem;
  padding: 2rem;

  background-color: ${props => props.theme.basePost};
  border-radius: 10px;


  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem 1rem;

  & > :last-child {
    grid-column: 1 / 3;
    
    	overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
  }
`

export const TitleM = styled.span`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${props => props.theme.baseTitle};
  font-weight: bold;
`

interface TextProps {
  $variant?: keyof typeof defaultTheme
}

export const TextM = styled.p<TextProps>`
  color: ${props => props.theme[props.$variant ?? "baseText"]};
  line-height: 1.6;
`