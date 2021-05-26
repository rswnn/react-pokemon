import styled from '@emotion/styled';
import { colors, size } from 'constant';

const Container = styled.div`
`;
const TitleWrapper =  styled.div`
    padding: 1rem 1rem;
`;

const ContentWrapper = styled.div`
    padding: 1rem 1rem;
`;

const ImageLoadingWrapper = styled.div`
    background: white;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
  .img-load {
    margin: auto;
    display: block;
    width: 250px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    animation: zoom-in-zoom-out 2s forwards;
  }
  @keyframes zoom-in-zoom-out {
    0% {
    transform: scale(1, 1);
    }
    50% {
    transform: scale(1.5, 1.5);
    }
    100% {
    transform: scale(1, 1);
    }
    }
`;

const TotalStyled = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  padding: 5px 5px;
  background-color: ${colors[0]};
  width: 130px;
  text-align: center;
  border-top-right-radius: 10px;
  z-index: 99;
  p {
    color: #ffffff;
  }
`;

export {
  Container, TitleWrapper, ContentWrapper, ImageLoadingWrapper, TotalStyled
};