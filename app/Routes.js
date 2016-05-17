'use strict';

import Home from 'Social/app/screens/Home'
import LogoutButton from 'Social/app/views/LogoutButton'
import PostButton from 'Social/app/views/PostButton'

class Routes {
  get(route, args) {
    if ("undefined" == typeof this[route]) {
      console.warn("No route found with name: " + route);
      return false;
    } else {
      return this[route].call(this, args);
    }
  }

  home() {
    return {
      name: "home",
      title: "Home",
      component: Home,
      leftButton: LogoutButton,
      rightButton: PostButton,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
}

export default new Routes()
