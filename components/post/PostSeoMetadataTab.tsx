import { Field } from 'formik'
import React from 'react'
const PostSeoMetadataTab = () => {
  return (
    <div>
      <div className="form-control">
        <label className='label text-accent'>
          <span>Page Title</span>
        </label>
        <Field name="title" type="text" className="input input-bordered" placeholder="title" />
        <label className='label text-accent'>
          <span>Meta Description</span>
        </label>
        <Field name="slug" type="text" className="input input-bordered" placeholder="slug" />
      </div>
    </div>
  )
}
export default PostSeoMetadataTab