import css from 'styled-jsx/css'
import { colors } from "../../styles/theme"

export default css`
img {
  width: 120px;
}

div {
  margin-top: 16px;
}

section {
  display: grid;
  height: 100%;
  place-content: center;
  place-items: center;
}

h1 {
  color: ${colors.secondary};
  font-weight: 800;
  margin-bottom: 16px;
}

h2 {
  color: ${colors.primary};
  font-size: 21px;
  margin: 0;
}`