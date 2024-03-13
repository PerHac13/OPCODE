const Button = ({ name, onClick, className  }) => {
  return (
    <div className={className}>
      <div className="bg-[#00FFD1] border-0 border-solid [border-radius:10px]">
        <div>
          <button onClick={onClick} className="text-[#00FFD1]  bg-bground border-2 border-solid px-6 py-[0.75rem] [border-radius:10px] hover:translate-x-[-3px] hover:translate-y-[-3px] easein duration-300">
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
