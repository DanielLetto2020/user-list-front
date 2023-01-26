export default async function ({app, store, $auth, redirect}, inject) {

  if ($auth.loggedIn) {
    // eslint-disable-next-line
    console.log('Hii ' + $auth.user.name)

    if (process.client && $auth.user.isChangePassword) {
      // redirect(302, '/settings') # no work
      // await app.router.push("/settings"); # no work
      // window.onNuxtReady(() => { window.$nuxt.$router.push('/settings') })
    }
  }

  let onLogin = async function () {
    // let authType = app.$auth.$storage.getUniversal('strategy');
    // const user = app.$auth.user;
    // console.log(user)
    // store.dispatch('permissions/createPermissions', user)
    // app.$socket.connector.options.auth.headers['Authorization'] = app.$auth.getToken(authType);

    // if(app.$auth.user.role.indexOf("ADMIN") != -1){
    // store.commit('m_role_admin', true);
    // }
    // if(app.$auth.user.role.indexOf("USER") != -1){
    // store.commit('m_role_user', true);
    // }
    console.log('let onLogin')
  };

  let onLogout = async function () {
    // app.$socket.connector.options.auth.headers['Authorization'] = '';
    // store.commit('m_role_admin', false);
    // store.commit('m_role_user', false);
    app.router.push("/login")
    console.log('let onLogout')
  };

  store.watch(state => state.auth.loggedIn, async (newValue) => {
    if (newValue) {
      await onLogin();
      console.log('onLogin');
    } else {
      await onLogout();
      console.log('onLogout');
    }
    window.localStorage.setItem('Auth_state', newValue);
  });

  if (!!app.$auth.loggedIn) {
    // await onLogin();
    // console.log("!!app.$auth.loggedIn \n\n\n\n")
  }
}
