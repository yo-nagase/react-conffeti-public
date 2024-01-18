import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>⭐️tart editing to see some magsssic happen :)</p>
    </div>
  );
};
