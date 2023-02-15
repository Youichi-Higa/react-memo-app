import { icons } from 'src/constants';

type Props = {
  turnOnEditMode: () => void;
};

export const EditBtn = (props: Props) => {
  const { turnOnEditMode } = props;

  return (
    <button
      className="bg-primary rounded w-[90px] h-10 flex flex-col items-center justify-center"
      onClick={turnOnEditMode}
    >
      <img src={icons.edit} alt="edit" />
      <p className="text-[10px] text-white">Edit</p>
    </button>
  );
};
