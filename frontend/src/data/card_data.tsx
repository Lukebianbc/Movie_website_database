import { ImFilm, ImRocket } from 'react-icons/im';

import { SiThemoviedatabase } from 'react-icons/si';

export const cardData = [
  {
    id: 1,
    title: 'Easy to use',
    text: `Very user friendly and intuitive applicaiton.
    The users can search for movies with complex filters and conditions. Users can also rate and add movies to their favorite list.`,
    icon: <ImFilm />,
  },
  {
    id: 2,
    title: 'DB focused backend',
    text: `User can perform CRUD actions on their liked movie, liked actor, rated movie, review lists. Also, we provide several query for movie retrieval.`,
    icon: <SiThemoviedatabase />,
  },
  {
    id: 3,
    title: 'Why this app',
    text: `This is a perfect opportunity for us to practice developing a CRUD-based web project.`,
    icon: <ImRocket />,
  },
];
