export default function BankCard({ accountDetails }) {
  const {
    name,
    myCard: { cardNumber, expiry },
  } = accountDetails;
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl shadow-lg w-60 md:w-96 h-52 md:h-64 flex flex-col justify-between text-white">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold tracking-wide">IE Bank</div>
        <div className="bg-white text-gray-800 rounded-full p-1 w-10 h-10 flex items-center justify-center">
          <span className="text-xs font-bold">VISA</span>
        </div>
      </div>

      {/* Card Details */}
      <div>
        <p className="text-sm tracking-widest font-medium mb-2">CARD NUMBER</p>
        <div className="text-lg font-semibold tracking-widest">
          {cardNumber}
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-sm tracking-widest font-medium">CARD HOLDER</p>
          <p className="text-base font-semibold tracking-wide">{name}</p>
        </div>
        <div>
          <p className="text-sm tracking-widest font-medium">EXPIRY DATE</p>
          <p className="text-base font-semibold">{expiry}</p>
        </div>
      </div>
    </div>
  );
}