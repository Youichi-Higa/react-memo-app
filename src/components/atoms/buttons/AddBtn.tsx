import { icons } from 'src/constants';

type Props = {
  addNewPage: () => void;
};

export const AddBtn = (props: Props) => {
  const { addNewPage } = props;

  return (
    <button
      className="bg-white border-2 border-primary rounded w-[90px] h-10 flex flex-col items-center justify-center"
      onClick={addNewPage}
    >
      <img src={icons.plus} alt="plus" />
      <p className="text-[10px] text-primary">New page</p>
    </button>
  );
};
