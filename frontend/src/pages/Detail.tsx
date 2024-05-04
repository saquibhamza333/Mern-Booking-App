import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-2 ">
          <div className="flex items-center mb-4">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-yellow-400" />
              ))}
            </span>
            <h1 className="text-3xl font-bold ml-2">{hotel.name}</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {hotel.imageUrls.map((image, index) => (
              <div key={index} className="w-full lg:w-auto">
                <img
                  src={image}
                  alt={hotel.name}
                  className="rounded-md w-full h-auto object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-8">
            {hotel.facilities.map((facility, index) => (
              <div key={index} className="border border-gray-300 rounded-sm p-3">
                {facility}
              </div>
            ))}
          </div>
          <div className="mt-8 whitespace-pre-line">{hotel.description}</div>
        </div>
        <div>
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        
        </div>
      </div>
    </div>
  );
};

export default Detail;
