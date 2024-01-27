import { useMutation } from "react-query"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm"
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client"

const AddHotel = () => {

  const { showToast } = useAppContext();
const {mutate,isLoading}=useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message:"Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message:"Error Saving Hotel", type: "ERROR" });
    },
  });
  const handleSave  = (hotelFormdata :FormData)=>{
    mutate(hotelFormdata);
  }
  return  <ManageHotelForm onSave = {handleSave} isLoading = {isLoading}/>
  
}

export default AddHotel