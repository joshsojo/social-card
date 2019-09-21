import React from "react";

import SocialCard from "../../component/social-card/social-card.component";

const Posts = {
  posts: [
    {
      id: 12,
      profilePic: "https://www.stevensegallery.com/640/360",
      userName: "Elemental By Medium",
      userHandle: "@elemental",
      posted: "19h",
      post:
        "At least 530 people in 38 states have gotten sick from vaping. Most of those hospitalized reported using THC oil in their vapes. Here’s what you should know.",
      postImg: "https://www.fillmurray.com/640/360"
    },
    {
      id: 13,
      profilePic: "https://placebeard.it/640x360",
      userName: "Elemental By Medium",
      userHandle: "@elemental",
      posted: "19h",
      post:
        "Built as a foil to placekitten, PlaceBeard.it offers something more earthy, more manly. Choose color or grayscale placeholder beards in every proportion for your next project",
      postImg: "https://picsum.photos/640/360"
    },
    {
      id: 14,
      profilePic: "https://www.placecage.com/640/360",
      userName: "Elemental By Medium",
      userHandle: "@elemental",
      posted: "19h",
      post:
        "Featuring options such as “Calm,” and “CRAZY,” you know this is the real deal. Make every web design feel like a Nicholas Cage movie. How could that not be a good thing?",
      postImg: "http://placeimg.com/640/360/any"
    },
    {
      id: 15,
      profilePic: "https://placebear.com/640/360",
      userName: "Elemental By Medium",
      userHandle: "@elemental",
      posted: "19h",
      post: `Featuring categories like “animals,” “architecture,” and “tech,” you'll be hard-pressed to find a nicer on-demand selection. And as a bonus PlaceIMG lets you choose color, grayscale or sepia.`,
      postImg: "https://loremflickr.com/640/360"
    }
  ]
};

const HomePage = () => (
  <div>
    {Posts.posts.map(
      post => (
        <SocialCard key={post.id} post={post} />
      )
      //  console.log(post)
    )}
  </div>
);

export default HomePage;
