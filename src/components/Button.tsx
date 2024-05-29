import { Trash2 } from "lucide-react";

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
      class="w-full p-2 rounded bg-indigo-800 hover:bg-indigo-900 items-center text-indigo-100 leading-none flex"
    >
      <span class="font-semibold whitespace-nowrap flex-auto ml-2">
        {title}
      </span>
      <RightArrowIcon />
    </button>
  );
};

export const IconButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      class="my-2 w-full text-white font-medium bg-red-500 hover:bg-red-500/80 flex gap-2 justify-center items-center min-w-6 p-2 rounded"
    >
      {title}
      <Trash2 size={16} />
    </button>
  );
};
