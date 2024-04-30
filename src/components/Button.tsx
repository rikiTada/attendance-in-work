type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      class="w-full inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const LinkButton = ({ title, onClick }: ButtonProps) => {
  const RightArrowIcon = () => {
    return (
      <svg
        class="fill-current opacity-75 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    );
  };

  return (
    <button
      onClick={onClick}
      class="p-2 rounded bg-indigo-800 hover:bg-indigo-900 items-center text-indigo-100 leading-none flex"
    >
      <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
        Open
      </span>
      <span class="font-semibold whitespace-nowrap mr-2 text-left flex-auto ">
        {title}
      </span>
      <RightArrowIcon />
    </button>
  );
};
