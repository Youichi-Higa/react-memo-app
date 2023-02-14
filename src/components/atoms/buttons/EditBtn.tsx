import { icons } from 'src/constants';

export const EditBtn = () => {
  return (
    <button className="bg-primary rounded w-full h-full flex flex-col items-center justify-center">
      <img src={icons.edit} alt="logo" />
      <p className="text-xs text-white">Edit</p>
    </button>
  );
};
