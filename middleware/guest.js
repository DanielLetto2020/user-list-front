
// How To Implement Authentication in a Nuxt.js App
// https://www.digitalocean.com/community/tutorials/implementing-authentication-in-nuxtjs-app

// export default function ({ store, redirect }) {
//   if (store.state.auth.loggedIn) {
//     return redirect('/')
//   }
// }

export default function ({$auth, redirect}) {
  if ($auth.loggedIn) {
    // return redirect('/')
  }
}
