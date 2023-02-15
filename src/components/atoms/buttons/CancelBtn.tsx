import { icons } from 'src/constants';

type Props = {
  turnOffEditMode: () => void;
};

export const CancelBtn = (props: Props) => {
  const { turnOffEditMode } = props;

  return (
    <button
      className="bg-gray rounded w-10 h-10 flex flex-col items-center justify-center"
      onClick={turnOffEditMode}
    >
      <img src={icons.cancel} alt="cancel" />
      <p className="text-[10px] text-white">Cancel</p>
    </button>
  );
};
