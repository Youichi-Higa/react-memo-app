import { useEffect, useState } from 'react';
import { updateMemo, useMemoData } from 'src/api';
import { Footer } from 'src/components/atoms';
import { MemoBody, MemoTitle } from 'src/components/molecules';
import { defaultMenu } from 'src/constants';
import type { Memo } from 'src/types';

type Props = {
  selectedMemoId?: number;
  canEditTitle: boolean;
  setCanEditTitle: React.Dispatch<React.SetStateAction<boolean>>;
  canEditBody: boolean;
  setCanEditBody: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Main = (props: Props) => {
  const { selectedMemoId, canEditTitle, setCanEditTitle, canEditBody, setCanEditBody } = props;

  // 選択されているメモのデータをDBから取得
  const { memo, isLoading, isError } = useMemoData(selectedMemoId);

  // 編集モードの際に表示するメモのデータで、保存ボタン押下時にDBに送信される
  const [editedMemo, setEditedMemo] = useState<Pick<Memo, 'title' | 'body'>>(defaultMenu);

  const editTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMemo({ ...editedMemo, title: event.target.value });
  };

  const editBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedMemo({ ...editedMemo, body: event.target.value });
  };

  const saveTitle = () => {
    if (selectedMemoId === undefined) return;
    updateMemo(selectedMemoId, editedMemo);
    turnOffTitleEditMode();
  };

  const saveBody = () => {
    if (selectedMemoId === undefined) return;
    updateMemo(selectedMemoId, editedMemo);
    turnOffBodyEditMode();
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

  // 選択されているメモが変更される度に実行
  useEffect(() => {
    // DBからデータを取得し、editedMemoに保存
    if (memo) {
      setEditedMemo({
        title: memo.title,
        body: memo.body,
      });
    }

    // 編集モードをOFFにする
    turnOffTitleEditMode();
    turnOffBodyEditMode();
  }, [memo]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <div className="col-span-4 min-h-screen pt-[30px] px-10">
      <div className="bg-light rounded-xl h-[calc(100vh_-_94px)] p-[30px]">
        <MemoTitle
          title={memo?.title}
          canEditTitle={canEditTitle}
          editTitle={editTitle}
          saveTitle={saveTitle}
          turnOnTitleEditMode={turnOnTitleEditMode}
          turnOffTitleEditMode={turnOffTitleEditMode}
        />
        
        <MemoBody
          body={memo?.body}
          canEditBody={canEditBody}
          editBody={editBody}
          saveBody={saveBody}
          turnOnBodyEditMode={turnOnBodyEditMode}
          turnOffBodyEditMode={turnOffBodyEditMode}
        />
      </div>
      
      <Footer />
    </div>
  );
};
