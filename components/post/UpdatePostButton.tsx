import classNames from 'classnames';
import { useFormikContext } from 'formik';
import React from 'react'

const SaveButton = () => {
  const { dirty, isSubmitting } = useFormikContext();
  return (
    <div className='fixed bottom-4 right-4'>
      <button type="submit" className={
        classNames({
          'btn btn-primary': true,
          'loading': isSubmitting,
        })
      } disabled={!dirty}>
        Update Post
      </button>
    </div>
  )
}

export default SaveButton