import { useState } from 'react';
import { useMemoData } from 'src/api';
import { CancelBtn, EditBtn, SaveBtn } from 'src/components/atoms/buttons';

type Props = {
  selectedMemoId?: number;
};

export const Main = (props: Props) => {
  const { selectedMemoId } = props;

  const [canEditTitle, setCanEditTitle] = useState<boolean>(false);
  const [canEditBody, setCanEditBody] = useState<boolean>(false);

  const turnOnTitleEditMode = () => {
    setCanEditTitle(true);
  };
  const turnOffTitleEditMode = () => {
    setCanEditTitle(false);
  };

  const turnOnBodyEditMode = () => {
    setCanEditBody(true);
  };
  const turnOffBodyEditMode = () => {
    setCanEditBody(false);
  };

  const { memo, isLoading, isError } = useMemoData(selectedMemoId);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <div className="col-span-4 min-h-screen pt-[30px] px-10">
        <div className="bg-light rounded-xl h-[calc(100vh_-_94px)] p-[30px]">
          {/* タイトル */}
          <div className="flex justify-between items-center mb-5">
            <p className="text-2xl font-bold w-full">{memo && memo.title}</p>
            {/* ボタンエリア */}
            <div className="w-[90px] h-10">
              {canEditTitle ? (
                // 編集中に表示
                <div className="flex gap-2.5">
                  <CancelBtn turnOffEditMode={turnOffTitleEditMode} />
                  <SaveBtn UpdateMemo={turnOffTitleEditMode} />
                </div>
              ) : (
                // 通常時に表示
                <EditBtn turnOnEditMode={turnOnTitleEditMode} />
              )}
            </div>
          </div>

          {/* メモ */}
          <div className="h-[calc(100vh_-_214px)] flex justify-between gap-5">
            <div className="w-full rounded-xl bg-white pt-[30px] px-[30px] overflow-auto">
              <p>{memo && memo.body}</p>
            </div>
            <div className="w-[90px] h-10">
              {canEditBody ? (
                // 編集中に表示
                <div className="flex gap-2.5">
                  <CancelBtn turnOffEditMode={turnOffBodyEditMode} />
                  <SaveBtn UpdateMemo={turnOffBodyEditMode} />
                </div>
              ) : (
                // 通常時に表示
                <EditBtn turnOnEditMode={turnOnBodyEditMode} />
              )}
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="h-16 flex justify-between items-center">
          <p className="text-xs">Copyright © 2021 Sample</p>
          <p className="text-xs">運営会社</p>
        </div>
      </div>
    </>
  );
};
