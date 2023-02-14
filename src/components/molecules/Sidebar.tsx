import { useState } from 'react';
import { EditBtn } from 'src/components/atoms/buttons';
import { MemoTitle } from 'src/components/atoms';
import { icons } from 'src/constants';
import type { Memo } from 'src/types';

type Props = {
  memoList: Memo[];
  selectedMemoId?: number;
  selectMemo: (id: number) => void;
};

export const Sidebar = (props: Props) => {
  const { memoList, selectedMemoId, selectMemo } = props;

  const [canEditMenu, setCanEditMenu] = useState<boolean>(false);

  const turnOnMenuEditMode = () => {
    setCanEditMenu(true);
  };

  return (
    <>
      <div className="col-span-1 pt-[30px] border-r border-slate-100 flex flex-col justify-between">
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
              canEditMenu={canEditMenu}
            />
          ))}
        </div>

        {/* ボタンエリア */}
        <div className="bg-light h-16 p-2.5 flex justify-end items-center">
          <EditBtn turnOnEditMode={turnOnMenuEditMode} />
        </div>
      </div>
    </>
  );
};
