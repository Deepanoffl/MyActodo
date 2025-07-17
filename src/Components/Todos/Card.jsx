const Card = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-tr from-purple-400 to-indigo-500 text-white p-6 rounded-xl shadow-md text-center">
      <h2 className="md:text-3xl text-xl font-bold">{title}</h2>
      <p className="font-bold mt-1 text-xs md:text-md">{subtitle}</p>
    </div>
  );
};

export default Card;
