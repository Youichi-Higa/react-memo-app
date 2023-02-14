import { useEffect, useState } from 'react';
import { updateMemo, useMemoData } from 'src/api';
import { CancelBtn, EditBtn, SaveBtn } from 'src/components/atoms/buttons';
import type { Memo } from 'src/types';

type Props = {
  selectedMemoId?: number;
  canEditTitle: boolean;
  setCanEditTitle: React.Dispatch<React.SetStateAction<boolean>>;
  canEditBody: boolean;
  setCanEditBody: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue = {
  title: 'タイトル',
  body: 'コンテンツ',
};

export const Main = (props: Props) => {
  const { selectedMemoId, canEditTitle, setCanEditTitle, canEditBody, setCanEditBody } = props;

  const { memo, isLoading, isError } = useMemoData(selectedMemoId);

  const [editedMemo, setEditedMemo] = useState<Pick<Memo, 'title' | 'body'>>(defaultValue);

  const editTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMemo({ ...editedMemo, title: event.target.value });
  };

  const saveMemo = () => {
    if (selectedMemoId === undefined) return;
    updateMemo(selectedMemoId, editedMemo);
    turnOffTitleEditMode();
  };

  // タイトル編集モードを切り替える関数
  const turnOnTitleEditMode = () => {
    setCanEditTitle(true);
  };
  const turnOffTitleEditMode = () => {
    setCanEditTitle(false);
  };

  // ボディ編集モードを切り替える関数
  const turnOnBodyEditMode = () => {
    setCanEditBody(true);
  };
  const turnOffBodyEditMode = () => {
    setCanEditBody(false);
  };

  useEffect(() => {
    if (memo) {
      setEditedMemo({
        title: memo.title,
        body: memo.body,
      });
    }
  }, [memo]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <div className="col-span-4 min-h-screen pt-[30px] px-10">
        <div className="bg-light rounded-xl h-[calc(100vh_-_94px)] p-[30px]">
          {/* タイトル */}
          <div className="flex justify-between items-center gap-5 mb-5">
            {canEditTitle ? (
              <>
                <input
                  type="text"
                  className="text-2xl font-bold w-full pl-[30px] py-1.5"
                  defaultValue={memo?.title}
                  onChange={editTitle}
                />
                <div className="w-[90px] h-10">
                  <div className="flex gap-2.5">
                    <CancelBtn turnOffEditMode={turnOffTitleEditMode} />
                    <SaveBtn
                      saveMemo={() => {
                        saveMemo();
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold w-full pl-[30px] py-1.5">{memo?.title}</p>
                <div className="w-[90px] h-10">
                  <div className="flex gap-2.5">
                    <EditBtn turnOnEditMode={turnOnTitleEditMode} />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* メモ */}
          <div className="h-[calc(100vh_-_214px)] flex justify-between gap-5">
            <div className="w-full rounded-xl bg-white pt-[30px] px-[30px] overflow-auto">
              <p>{memo?.body}</p>
            </div>
            <div className="w-[90px] h-10">
              {canEditBody ? (
                // 編集中に表示
                <div className="flex gap-2.5">
                  <CancelBtn turnOffEditMode={turnOffBodyEditMode} />
                  <SaveBtn saveMemo={saveMemo} />
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
