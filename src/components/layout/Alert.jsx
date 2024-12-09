import { FaTimes } from "react-icons/fa";
import { useAlert } from "../../context/Alert/AlertContext";

const Alert = () => {
  const { alert } = useAlert();
  // return alert !== null && (
  //   <div>

  //   </div>
  // );

  return (
    alert !== null && (
      <div className="inline-block gap-3 my-2 p-2 bg-red-500 rounded ">
        <div className="flex gap-2 items-center">
          <FaTimes color="#fff" />
          <strong className="text-white">{alert.msg}</strong>
        </div>
      </div>
    )
  );
};

export default Alert;
