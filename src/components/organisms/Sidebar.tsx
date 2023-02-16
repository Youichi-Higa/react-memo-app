import { useSWRConfig } from 'swr';
import { addNewMemo, deleteMemo } from 'src/api';
import { MemoTitle } from 'src/components/atoms';
import { MemoListEditButtons } from 'src/components/molecules';
import { apiUrl, icons } from 'src/constants';
import type { Memo } from 'src/types';

type Props = {
  memoList: Memo[];
  selectedMemoId?: number;
  setCanEditMenu: React.Dispatch<React.SetStateAction<boolean>>;
  canEditMenu: boolean;
  selectMemo: (id: number) => void;
};

export const Sidebar = (props: Props) => {
  const { memoList, selectedMemoId, canEditMenu, setCanEditMenu, selectMemo } = props;

  const { mutate } = useSWRConfig();

  const saveNewMemo = async () => {
    await addNewMemo();
    mutate(apiUrl); // メモ一覧のデータを再フェッチ
  };

  const removeMemo = async (id: number) => {
    if (selectedMemoId === undefined) return;
    await deleteMemo(id);
    mutate(apiUrl); // メモ一覧のデータを再フェッチ
  };

  const turnOnMenuEditMode = () => {
    setCanEditMenu(true);
  };
  const turnOffMenuEditMode = () => {
    setCanEditMenu(false);
  };

  return (
    <>
      <div className="col-span-1 pt-[30px] border-r border-slate-100 flex flex-col justify-between">
        {/* メモエリア */}
        <div className="pl-10 pr-2.5">
          {/* サービス名 */}
          <div className="flex items-center h-8 mb-5">
            <img src={icons.logo} alt="logo" />
            <p className="ml-1 text-2xl font-bold">ServiceName</p>
          </div>

          {/* メモリスト */}
          {memoList.map((memo) => (
            <MemoTitle
              key={memo.id}
              selectMemo={() => selectMemo(memo.id)}
              title={memo.title}
              isSelected={memo.id === selectedMemoId}
              canEditMenu={canEditMenu}
              removeMemo={() => removeMemo(memo.id)}
            />
          ))}
        </div>

        <MemoListEditButtons
          canEditMenu={canEditMenu}
          saveNewMemo={saveNewMemo}
          turnOnMenuEditMode={turnOnMenuEditMode}
          turnOffMenuEditMode={turnOffMenuEditMode}
        />
      </div>
    </>
  );
};
