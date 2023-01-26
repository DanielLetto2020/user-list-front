import {UserScope} from "~/const/main"

export default function ({$auth, redirect}) {


  if (!$auth.hasScope(UserScope.CREATOR)) {
    return redirect('/')
  }

  // if (!$auth.hasScope('MANAGER') || !$auth.hasScope('USER')) {
  //   return redirect('/')
  // }
}
