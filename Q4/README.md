# rec-vue-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
***Fixing the errors***

***Store.js***

1. Variable for state is wrong, it should be 'lists' not 'list'
2. On getters, getCountData shold be return state.lists.length not return 0, becauses it return the length of lists
3. On actions, at context.commit, it should be 'setDatas' not 'setData'

***Mutation-types.js***

1. Const on mutation types should be 'setDatas' not 'SET_DATA' because the actions changes from 'setData' to 'setDatas'

***Users.vue***
1. At import, change INCREMENT to SET_DATA, because the app don't have variable called INCREMENT at mutation-types and we dont needed that variable
2. At the methods setData, it should be dispatch 'setDatas', not 'setData'
3. Add mapState at computed, to return state of lists
4. Add console.log(error) to catch the error when data not loaded
5. Add directive if when data not loaded yet
6. Fixing some CSS to make website look better
