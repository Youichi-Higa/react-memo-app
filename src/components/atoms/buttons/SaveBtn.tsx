import { icons } from 'src/constants';

type Props = {
  saveMemo: () => void;
};

export const SaveBtn = (props: Props) => {
  const { saveMemo } = props;

  return (
    <button
      className="bg-primary rounded w-10 h-10 flex flex-col items-center justify-center"
      onClick={saveMemo}
    >
      <img src={icons.save} alt="save" />
      <p className="text-[10px] text-white">Save</p>
    </button>
  );
};
