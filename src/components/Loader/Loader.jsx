import Container from 'components/Container/Container';
import Loader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner() {
  return (
    <Container>
      <Loader css={override} />
    </Container>
  );
}
