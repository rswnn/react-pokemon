import styled from '@emotion/styled';
import { size } from 'constant';

const Container = styled.div`
  .text-oops {
        font-size: 48px;
        opacity: 0.6;
        @media ${size.sm} {
            font-size: 28px;
        }
    }
    .img-ash {
      width: 250px;
    }
`;
const TitleWrapper =  styled.div`
    padding: 1rem 1rem;
`;

const ContentWrapper = styled.div`
    padding: 1rem 1rem;
`;

const EmptyStyled = styled.div`
    padding: 0 20px;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text-oops {
        font-size: 48px;
        opacity: 0.6;
        text-align: center;
    }
    .img-ash {
        width: 100px;
        opacity: 0.5;
    }
    .mt-2 {
        margin-top: 1rem;
    }
    @media ${size.sm} {
    .text-oops {
        font-size: 24px;
    }
    .img-ash {
        width: 200px;
    }
  }
`;

export {
  Container, TitleWrapper, ContentWrapper, EmptyStyled
};