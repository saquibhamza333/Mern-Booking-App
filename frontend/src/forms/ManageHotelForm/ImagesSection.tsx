import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm";


const ImagesSection = () => {
    const {register , formState:{errors}} = useFormContext<HotelFormData>();
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Images</h2>
        <div className="flex flex-col border rounded p-4 gap-4">
            <input type="file" multiple accept="image/*" className="w-full text-gray-700 font-normal"  {...register('imageFiles',{
                validate:(imageFiles)=>{
                    const totalLength = imageFiles.length;
                    if(totalLength===0){
                        return "at least one image should be uploaded"

                    }
                    if(totalLength>6){
                        return "Total number of images should not be greater than 6"
                    }
                    return true;

                }
            })}>
                

            </input>

        </div>
        {errors.imageFiles && (
            <span className="text-red-500 font-bold text-sm">
                {errors.imageFiles.message}
                </span>
        )}
    </div>
  )
}

export default ImagesSection