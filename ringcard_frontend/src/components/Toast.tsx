import { toast, ToastContainer, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


// props 써서.
function Toastify(props: any) {

  // toastify 알람 실행 함수 만들기
  const notify = () => toast(props.text, { 
		autoClose: 700,
		position:"top-center", 
		pauseOnFocusLoss: true,
		hideProgressBar: true,
		draggable: true, 
		pauseOnHover: true,
		theme: "dark",
		closeButton: false,
		transition: Zoom,
		// onOpen: () => window.alert('Called when I open'),
		// onClose: () => window.alert('Called when I close')
  })

  return(
  <>
  <ToastContainer/>
  <button onClick={notify}/></>)
}

export default Toastify;