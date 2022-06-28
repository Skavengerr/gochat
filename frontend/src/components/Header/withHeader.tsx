import React, { useState } from 'react';

type Props = {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  settings: string[];
};

const settings: Props['settings'] = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const withHeader = (Component: React.FC<Props>) => () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu: Props['handleOpenUserMenu'] = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const props: Props = {
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    settings,
  };

  return <Component {...props} />;
};
