
let initialState = {
   navBarLinks: [
      { id: 1, link: 'Profile', path: '/profile' },
      { id: 2, link: 'News', path: '/news' },
      { id: 3, link: 'Messages', path: '/dialogs' },
      { id: 4, link: 'Music', path: '/music' },
      { id: 5, link: 'Settings', path: '/settings' },
      { id: 6, link: 'Users', path: '/users' },
   ],
   friends: [
      { id: 2, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "Andrew" },
      { id: 3, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "John" },
      { id: 1, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "Kate" },
   ]
};

function navBarReducer(state = initialState, action) {
   let stateCopy = Object.assign({}, state)

   return stateCopy;
}

export default navBarReducer;