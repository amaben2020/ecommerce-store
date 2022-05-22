import { toast } from "react-toastify";
 

const capitalizeFirstWord = (string: string) => {
  if (typeof string !== 'string' || Number(string)) {
    toast(`Invalid input ${string} try e.g Beats Headphone`, {
      type: "error",
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    return 'Invalid input'
  }  
  const words = string.split(" ");
  const hash = [];

  for (let strg of words) {
    const word = strg && strg[0].toUpperCase() + strg.substring(1);
    hash.push(word);
  }
  return hash.join(" ");
};


export default capitalizeFirstWord