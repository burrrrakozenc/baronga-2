import React from 'react';
import { Provider, LikeButton } from '@lyket/react';

const Like = ({ shopifyHandle }) => {
  return (
    <div>
      <Provider apiKey="pt_f22c2a2953c90ed0727e9188f19a8d">
        <LikeButton
          namespace="my-blog-post"
          id={shopifyHandle}
          component={LikeButton.templates.Twitter}
        />
      </Provider>
    </div>
  );
};

export default Like;
