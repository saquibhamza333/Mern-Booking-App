const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight mb-4 sm:mb-0">
          MernHolidays.com
        </span>
        <span className="text-white font-bold tracking-tight flex flex-col sm:flex-row gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
