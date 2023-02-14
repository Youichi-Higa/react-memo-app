import { EditBtn } from 'src/components/atoms/buttons';
import { MemoTitle } from 'src/components/atoms';
import { icons } from 'src/paths/icons';
import type { Memo } from 'src/types';

type Props = {
  memoList: Memo[];
  selectedMemoId: number;
  canMenuEdit: boolean;
  selectMemo: (id: number) => void;
};

export const Sidebar = (props: Props) => {
  const { memoList, selectedMemoId, canMenuEdit, selectMemo } = props;
  return (
    <>
      <div className="col-span-1 pt-[30px] border-r flex flex-col justify-between">
        {/* メモエリア */}
        <div className=" pl-10 pr-2.5">
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
              canMenuEdit={canMenuEdit}
            />
          ))}
        </div>

        {/* ボタンエリア */}
        <div className="bg-light h-16 p-2.5 flex justify-end items-center">
          <div className="w-20 h-10">
            <EditBtn />
          </div>
        </div>
      </div>
    </>
  );
};
