import { icons } from 'src/constants';

type Props = {
  title: string;
  selectMemo: () => void;
  isSelected: boolean;
  canEditMenu: boolean;
  removeMemo: () => Promise<void>;
};

export const MemoTitle = (props: Props) => {
  const { title, selectMemo, isSelected, canEditMenu, removeMemo } = props;

  return (
    <>
      {isSelected ? (
        // 選択時に表示
        <div className="flex justify-between items-center min-h-[44px] px-2 bg-light rounded">
          <div className="w-full cursor-pointer">
            <p className="text-base text-primary font-bold">{title}</p>
          </div>
          <div className="w-6 ml-2.5 cursor-pointer">
            {canEditMenu && <img src={icons.delete} alt="delete" onClick={removeMemo} />}
          </div>
        </div>
      ) : (
        // 通常時に表示
        <div className="flex justify-between items-center min-h-[44px] px-2">
          <div className="w-full cursor-pointer" onClick={selectMemo}>
            <p className="text-base">{title}</p>
          </div>
          <div className="w-6 ml-2.5 cursor-pointer">
            {canEditMenu && <img src={icons.delete} alt="delete" onClick={removeMemo} />}
          </div>
        </div>
      )}
    </>
  );
};
