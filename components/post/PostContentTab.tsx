import { Field } from 'formik'
import React from 'react'

const PostContentTab = () => {
  return (
    <div>
      <div className="form-control">
        <label className='label text-accent'>
          <span>Content</span>
        </label>
        <Field as="textarea" name="content" className="input input-bordered" placeholder="Write a great article..." />
      </div>
    </div>
  )
}

export default PostContentTab