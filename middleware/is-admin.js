import {UserScope} from "~/const/main"

export default function ({route, $auth, redirect}) {
  // let user = context.store.getters['auth/user']
  //
  // if ( user.role !== 'admin' ) {
  //   return context.redirect('/errors/403')
  // }

  // console.log($auth.user)
  // console.log($auth.hasScope(UserScope.ADMIN))

  if (!$auth.hasScope(UserScope.ADMIN)) {
     $auth.logout()
  }

  // Ну раз используешь nuxt, то почему бы не использовать официальный модуль auth?
  //   В этом модуле, когда получаешь объект пользователя можно передать scope.
  //   А потом обращаться так: this.$auth.hasScope('admin')

  // if ($auth.user.data.role.indexOf("ADMIN") === -1) {
  //   return redirect('/')
  // }
}


/*По умолчанию scopeKey-это "scope". Вам не нужно устанавливать его снова.

  Для меня это сработало, выполнив изменение на стороне сервера.

  Когда я помещаю строковое значение в область, оно не работает

$data['scope'] = "admin";
Но когда я изменил его на массив, $auth.hasScope('admin')работает;

$data['scope'] = array("admin", "test");
Надеюсь, это поможет.
https://github.com/nuxt-community/auth-module/blob/master/lib/module/defaults.js
*/
