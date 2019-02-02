import { combineReducers } from 'redux'

const initialState = {
  id: 1,
  title: 'test',
  subTitle: 'test',
  text: 'aaa',
  updateDate: Date().toString()
}
const articles = (state = [initialState], action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          subTitle: action.subTitle,
          text: action.text,
          updateDate: action.updateDate
        }
      ]
    default:
      return state
  }
}

export default combineReducers({
  articles
})
