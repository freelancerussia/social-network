let state = {

   profilePage: {
      postsData: [
         { id: 1, message: 'hi,how are you?', likeCount: 10 },
         { id: 2, message: "it's my first post", likeCount: 12 },
         { id: 3, message: "it's my first post", likeCount: 12 },
         { id: 4, message: "it's my first post", likeCount: 12 },
      ],

   },
   dialogsPage: {
      dialogsData: [
         { id: 1, name: 'Alex' },
         { id: 2, name: 'AlexMan' },
         { id: 3, name: 'Xan' },
         { id: 4, name: 'Bany' },
      ],

      messagesData: [
         { id: 1, text: 'hi' },
         { id: 2, text: 'you' },
         { id: 3, text: 'lol' },
         { id: 4, text: 'hahaha' }
      ],
   },
   navBar: {
      navBarLinks: [
         { id: 1, link: 'Profile', path: '/profile' },
         { id: 2, link: 'News', path: '/news' },
         { id: 3, link: 'Messages', path: '/dialogs' },
         { id: 4, link: 'Music', path: '/music' },
         { id: 5, link: 'Settings', path: '/settings' },
      ],
      friends: [
         { id: 2, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "Andrew" },
         { id: 3, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "John" },
         { id: 1, src: 'https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg', name: "Kate" },
      ]
   }
}




export default state;

