import styled from 'styled-components';

const Base = ({ as = 'div' }) =>
  styled[as]`
    display: flex;
    flex: 1;
  `

export default styled(Base);