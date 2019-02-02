import { combineReducers } from 'redux'

const articles = (state = [], action) => {
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
