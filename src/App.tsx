import { useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';
import { useMemoList } from 'src/api';
import { apiUrl } from 'src/constants';
import { Main, Sidebar } from 'src/components/organisms';
import '@fontsource/noto-sans-jp';

function App() {
  const { mutate } = useSWRConfig();

  // メモ一覧のデータをDBから取得
  const { memoList, initialId, isLoading, isError } = useMemoList();

  const [selectedMemoId, setSelectedMemoId] = useState<number | undefined>(initialId);
  const [canEditMenu, setCanEditMenu] = useState<boolean>(false);
  const [canEditTitle, setCanEditTitle] = useState<boolean>(false);
  const [canEditBody, setCanEditBody] = useState<boolean>(false);

  const selectMemo = (id?: number) => {
    setSelectedMemoId(id);
  };

  //初回マウント時に一番上のメモを選択状態にする
  useEffect(() => {
    selectMemo(initialId);
  }, [initialId]);

  // 編集モードの切り替え時にデータを再フェッチ
  useEffect(() => {
    mutate(apiUrl);
    mutate(`${apiUrl}/${selectedMemoId}`);
  }, [canEditTitle, canEditBody]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <div className="App">
      <div className="grid grid-cols-5 gap-0 min-h-screen">
        {memoList && (
          <Sidebar
            memoList={memoList}
            selectedMemoId={selectedMemoId}
            canEditMenu={canEditMenu}
            setCanEditMenu={setCanEditMenu}
            selectMemo={selectMemo}
          />
        )}

        <Main
          selectedMemoId={selectedMemoId}
          canEditTitle={canEditTitle}
          setCanEditTitle={setCanEditTitle}
          canEditBody={canEditBody}
          setCanEditBody={setCanEditBody}
        />
      </div>
    </div>
  );
}

export default App;
