import { toast } from "react-toastify"

const useToasts = () => {



const SuccessToast = (msg) => {
        toast.success(msg, {
            position: 'top-center'
        })
    }
    
const ErrorToast = (msg) => {
        toast.error(msg, {
            position: 'top-center'
        })
    }
    
  return {

   SuccessToast,
   ErrorToast
  }
}

export default useToasts





