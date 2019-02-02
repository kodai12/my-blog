import React from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions'

const AddArticle = ({ dispatch }) => {
  let title
  let subTitle
  let text

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim || !text.value.trim) return
          dispatch(
            addArticle(
              title.value,
              subTitle.value,
              text.value,
              Date().toString())
          )
          title.value = ''
          subTitle.value = ''
          text.value = ''
        }}
      >
      <input ref={node => (title = node)} />
      <input ref={node => (subTitle = node)} />
      <input ref={node => (text = node)} />
      <button type="submit">Submit Article</button>
      </form>
    </div>
  )
}

export default connect()(AddArticle)
