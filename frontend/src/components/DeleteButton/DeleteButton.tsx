import { AsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useAppDispatch } from '../../store/store.hook'
export const DeleteButton: React.FC<AppProps> = ({ typeDisptach, idData }) => {
  const MySwal = withReactContent(Swal)

  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(typeDisptach(idData)).then(() => {
          MySwal.fire('Deleted!', 'Your file has been deleted.', 'success')
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
  }
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        handleOpenModal()
      }}
    >
      Delete
    </button>
  )
}

type AppProps = {
  typeDisptach: AsyncThunk<string, string, {}>
  idData: string
}
