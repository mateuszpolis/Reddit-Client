import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Components/Post";
import "./Feed.css";
import { isLoadingPosts, selectPosts } from "./feedSlice";

export const Feed = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(isLoadingPosts);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return <div id="feed" className="isLoading"></div>;
  }
  return (
    <div id="feed">
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque, nisi ullamcorper fermentum mattis, quam metus molestie nisi, eu dapibus ante nisl in sem. Proin iaculis nisl sit amet tempus tincidunt. Nullam sit amet tincidunt nisl. Maecenas blandit ante id nisl maximus vehicula. Nulla laoreet finibus tincidunt. Pellentesque et enim urna. Phasellus id magna id elit porttitor suscipit. Fusce ipsum velit, facilisis vel pellentesque a, euismod in sem. Nullam feugiat, dolor ut vulputate convallis, arcu elit tincidunt nunc, ac pharetra purus lectus in libero. Ut vel mollis sapien, a lobortis nibh. Cras eget arcu nisi. Pellentesque dapibus nisl a fermentum rhoncus. Phasellus arcu purus, sodales ullamcorper lobortis at, faucibus in libero. Nullam vehicula sed magna quis pulvinar. Curabitur dui mauris, posuere eget arcu vel, vulputate vulputate erat. Sed bibendum a enim eu finibus.

        "
      />
    </div>
  );
};
