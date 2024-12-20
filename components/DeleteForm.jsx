'use client';

import { useFormStatus } from "react-dom";

const { deleteTask } = require("@/utils/action")


const SubmitBtn = () => {
  const {pending} = useFormStatus();
  return(
    <button type="submit" className="btn btn-xs btn-error"
    disabled={pending}
    >

      {pending ? 'pending..' : 'delete'}
    </button>
    
  ) ;
}
const DeleteForm = ({id}) => {

  return (
    <form action={deleteTask}>
        <input type="hidden"  name='id' value={id} />
      <SubmitBtn/>
      </form>
  )
}

export default DeleteForm