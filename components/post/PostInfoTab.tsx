import { Field } from 'formik'
import React from 'react'
const PostInfoTab = () => {
  return (
    <div>
      <div className="form-control">
        <label className='label text-accent'>
          <span>Headline</span>
        </label>
        <Field name="headline" type="text" className="input input-bordered" placeholder="headline" />
        <label className='label text-accent'>
          <span>Slug</span>
        </label>
        <Field name="slug" type="text" className="input input-bordered" placeholder="slug" />
      </div>
    </div>
  )
}
export default PostInfoTab