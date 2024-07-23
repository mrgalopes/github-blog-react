import styled from "styled-components";
import { defaultTheme } from "./themes/default";

export const TitleL = styled.h1`
  color: ${props => props.theme.baseTitle};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.3;
`

export const TitleM = styled.h2`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${props => props.theme.baseTitle};
  font-weight: bold;
`

export const TitleS = styled.h3`
  color: ${props => props.theme.baseSubtitle};
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: bold;
`

interface TextProps {
  $variant?: keyof typeof defaultTheme
}

export const TextM = styled.span<TextProps>`
  color: ${props => props.theme[props.$variant ?? "baseText"]};
  line-height: 1.6;
`

export const TextS = styled.span`
  color: ${props => props.theme.baseSpan};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 500;
`