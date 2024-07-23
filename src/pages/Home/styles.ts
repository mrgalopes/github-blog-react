import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-bottom: 15rem;
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

