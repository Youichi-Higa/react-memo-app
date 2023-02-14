import { useState } from 'react';
import { useMemoList } from 'src/api';
import { Main, Sidebar } from 'src/components/molecules';
import '@fontsource/noto-sans-jp';

function App() {
  const [selectedMemoId, setSelectedMemoId] = useState<number>(1);
  const [canMenuEdit, setCanMenuEdit] = useState<boolean>(false);

  const selectMemo = (id: number) => {
    setSelectedMemoId(id);
  };

  const { memoList, isLoading, isError } = useMemoList();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <div className="App">
      <div className="grid grid-cols-5 gap-0 min-h-screen">
        {memoList && (
          <Sidebar
            memoList={memoList}
            selectedMemoId={selectedMemoId}
            canMenuEdit={canMenuEdit}
            selectMemo={selectMemo}
          />
        )}
        {memoList && <Main memo={memoList[0]} />}
      </div>
    </div>
  );
}

export default App;
