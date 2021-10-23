import React from 'react'

export const LoaderLoading: React.FC = () => {
  return (
    <div className="wrapper_loading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Loading</span>
    </div>
  )
}
