import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            menus: [
                {
                    menu: '菜单1',
                    count: 0
                },
                {
                    menu: '菜单2',
                    count: 0
                },
                {
                    menu: '菜单3',
                    count: 0
                },
                {
                    menu: '菜单4',
                    count: 0
                },
                {
                    menu: '菜单5',
                    count: 0
                },
                {
                    menu: '菜单6',
                    count: 0
                }
            ]
        }
    },
    mutations: {
        createMenu(state) {
            var menuItem = {}
            menuItem["menu"] = '菜单'+String(state.menus.length+1)
            menuItem["count"] = 0
            state.menus.push(menuItem)
            console.log(state.menus)
        },
        deleteMenu(state) {
            state.menus.pop()
            console.log(state.menus)
        },
        menuSelectCount(state, menuItemIndex) {
            var oldState = state
            console.log('oldState'+oldState)
            oldState.menus[menuItemIndex].count++
            console.log('newState'+oldState)
            state = oldState
        }
    }
})


