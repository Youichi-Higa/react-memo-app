import { EditBtn } from 'src/components/atoms/buttons';
import type { Memo } from 'src/types';

type Props = {
  memo: Memo;
};

export const Main = (props: Props) => {
  const { memo } = props;

  return (
    <>
      <div className="col-span-4 min-h-screen pt-[30px] px-10">
        <div className="bg-light rounded-xl h-[calc(100vh_-_94px)] p-[30px]">
          {/* タイトル */}
          <div className="flex justify-between items-center mb-5">
            <p className="text-2xl font-bold w-full">{memo.title}</p>
            <div className="w-20 h-10">
              <EditBtn />
            </div>
          </div>

          {/* メモ */}
          <div className="h-[calc(100vh_-_214px)] flex justify-between gap-5">
            <div className="w-full rounded-xl bg-white pt-[30px] px-[30px] overflow-auto">
              <p>{memo.body}</p>
            </div>
            <div className="w-20 h-10">
              <EditBtn />
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
