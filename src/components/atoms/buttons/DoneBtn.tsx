import { icons } from 'src/constants';

type Props = {
  saveMemoList: () => void;
};

export const DoneBtn = (props: Props) => {
  const { saveMemoList } = props;

  return (
    <button
      className="bg-primary rounded w-[90px] h-10 flex flex-col items-center justify-center"
      onClick={saveMemoList}
    >
      <img src={icons.done} alt="done" />
      <p className="text-[10px] text-white">Done</p>
    </button>
  );
};
