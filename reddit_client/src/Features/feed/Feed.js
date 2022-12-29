import React from "react";
import { Post } from "../../Components/Post";
import "./Feed.css";
import "./ScrollBar.css";
import imageTest from "../../images/photo-1481349518771-20055b2a7b24.jpg";

export const Feed = () => {
  return (
    <div id="feed">
      <Post
        header="Lorem ipsum dolor sit amet, consectetur adipiscing."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante sem, lobortis at diam sit amet, convallis consequat ipsum. Etiam ac dictum nulla, eu sagittis purus. Morbi nec orci ac quam consectetur dictum feugiat et neque. Nulla facilisi. Cras leo diam, molestie ut elit id, facilisis porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque tempus pretium quam, sit amet egestas erat pretium a."
      />
      <Post header="Lorem ipsum dolor sit amet." text="" image={imageTest} />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris."
        text="Sed ac ante iaculis orci dignissim tempus vel sed justo. Morbi non quam odio. Duis rhoncus varius vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor, nisi ut interdum fringilla, orci diam convallis ipsum, vel pharetra eros nisi id justo. Quisque lacinia quis odio quis sagittis. Donec maximus sapien ac semper cursus. Etiam porta in nisl nec hendrerit. Curabitur eleifend magna mollis egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non sollicitudin dolor."
      />
      <Post
        header="Lorem ipsum dolor."
        text="Donec pellentesque odio nec lacus convallis rutrum. Integer et leo id augue interdum volutpat non eu nulla. Donec fermentum porta ornare. Vestibulum odio dui, fermentum vel maximus in, rutrum vitae dui. Phasellus fringilla et nisi vel gravida. Integer vel iaculis enim. Nulla facilisi.

"
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris."
        text="Sed ac ante iaculis orci dignissim tempus vel sed justo. Morbi non quam odio. Duis rhoncus varius vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor, nisi ut interdum fringilla, orci diam convallis ipsum, vel pharetra eros nisi id justo. Quisque lacinia quis odio quis sagittis. Donec maximus sapien ac semper cursus. Etiam porta in nisl nec hendrerit. Curabitur eleifend magna mollis egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non sollicitudin dolor."
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris."
        text="Sed ac ante iaculis orci dignissim tempus vel sed justo. Morbi non quam odio. Duis rhoncus varius vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor, nisi ut interdum fringilla, orci diam convallis ipsum, vel pharetra eros nisi id justo. Quisque lacinia quis odio quis sagittis. Donec maximus sapien ac semper cursus. Etiam porta in nisl nec hendrerit. Curabitur eleifend magna mollis egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non sollicitudin dolor."
      />
      <Post
        header="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris."
        text="Sed ac ante iaculis orci dignissim tempus vel sed justo. Morbi non quam odio. Duis rhoncus varius vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor, nisi ut interdum fringilla, orci diam convallis ipsum, vel pharetra eros nisi id justo. Quisque lacinia quis odio quis sagittis. Donec maximus sapien ac semper cursus. Etiam porta in nisl nec hendrerit. Curabitur eleifend magna mollis egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non sollicitudin dolor."
      />
    </div>
  );
};
