import { star } from "../../../public/assets";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  // Validate rating is between 1 and 5
  const validatedRating = Math.min(5, Math.max(1, Math.round(rating)));

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <img
        src={imgURL}
        alt={customerName}
        className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full object-cover"
      />
      <h3 className="mt-4 font-palanquin text-xl md:text-2xl text-center font-bold">
        {customerName}
      </h3>
      <p className="info-text text-center mt-2 max-w-sm text-md">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-1">
        {/* Render filled stars */}
        {[...Array(validatedRating)].map((_, i) => (
          <img
            key={`filled-${i}`}
            src={star}
            alt="filled star"
            width={24}
            height={24}
            className="object-contain"
          />
        ))}
        {/* Render empty stars */}
        {[...Array(5 - validatedRating)].map((_, i) => (
          <img
            key={`empty-${i}`}
            src={star}
            alt="empty star"
            width={24}
            height={24}
            className="object-contain opacity-30"
          />
        ))}
        <p className="text-lg md:text-xl font-montserrat text-slate-gray ml-2">
          ({validatedRating})
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
