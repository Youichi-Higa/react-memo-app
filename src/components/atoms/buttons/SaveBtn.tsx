import { icons } from 'src/constants';

type Props = {
  UpdateMemo: () => void;
};

export const SaveBtn = (props: Props) => {
  const { UpdateMemo } = props;

  return (
    <button
      className="bg-primary rounded w-10 h-10 flex flex-col items-center justify-center"
      onClick={UpdateMemo}
    >
      <img src={icons.save} alt="logo" />
      <p className="text-[10px] text-white">Save</p>
    </button>
  );
};
