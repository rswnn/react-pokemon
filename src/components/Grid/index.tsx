import React from 'react';
import { GridWrapper } from './style';

type GridProps = {
    children?: React.ReactNode;
    className?: string
    type?: 'lg' | 'md'
}

const Grid = ({
  children, className, type = 'md'
}: GridProps) => {
  return (
    <GridWrapper className={ className } type={ type }>
      { children }
    </GridWrapper>
  );
};

const MemoizedGrid = React.memo(Grid);
export default MemoizedGrid;
