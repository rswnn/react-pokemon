import styled from '@emotion/styled';
import { size } from 'constant';

const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text-oops {
        font-size: 48px;
        opacity: 0.6;
    }
    img {
        width: 300px;
    }
    .mt-2 {
        margin-top: 1rem;
    }
    @media ${size.sm} {
    .text-oops {
        font-size: 24px;
    }
    img {
        width: 200px;
    }
}
`;

export { Container };