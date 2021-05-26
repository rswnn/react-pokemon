import { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type NavbarProps = RouteComponentProps<
  { myParamProp?: string },
  any,
  { name?: string, image?:string, color?:string }
>

const useNavbar = ({ history }) => {
  const { location } = history;
  const { pathname, state } = location;
  const [open, setOpen] = useState(false);
  const name = pathname.split('/')[1];

  const handleNavigate = (path = '/') => {
    if (path !== pathname) {
      history.push({
        pathname: path,
        state: {
          name: undefined,
          image: undefined,
          color: undefined
        }
      });
    }
    setToggleDrawwer();
  };

  const setToggleDrawwer = useCallback(() => {
    setOpen(false);
  }, [open]);

  const handleNavigateBack = () => {
    history.goBack();
  };

  const isPageDetail = name === 'detail' && state && state.color;

  return {
    handleNavigate,
    open,
    setOpen,
    handleNavigateBack,
    state,
    isPageDetail
  };
};

export default useNavbar;