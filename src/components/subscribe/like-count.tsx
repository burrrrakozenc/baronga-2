import React from 'react';
import { Provider, LikeButton } from '@lyket/react';

const Like = ({ shopifyHandle }) => {
  return (
    <div>
      <Provider apiKey="pt_dc75b0c7da03036ef554121abf0973">
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
