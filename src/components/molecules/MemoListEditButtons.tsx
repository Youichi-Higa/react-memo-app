import { AddBtn, DoneBtn, EditBtn } from 'src/components/atoms/buttons';

type Props = {
  canEditMenu: boolean;
  saveNewMemo: () => Promise<void>;
  turnOnMenuEditMode: () => void;
  turnOffMenuEditMode: () => void;
};

export const MemoListEditButtons = (props: Props) => {
  const { canEditMenu, saveNewMemo, turnOnMenuEditMode, turnOffMenuEditMode } = props;

  return (
    <div className="bg-light h-16 pr-2.5 flex justify-end items-center">
      {canEditMenu ? (
        <div className="pl-10 flex justify-between w-full">
          <AddBtn addNewPage={saveNewMemo} />
          <DoneBtn saveMemoList={turnOffMenuEditMode} />
        </div>
      ) : (
        <EditBtn turnOnEditMode={turnOnMenuEditMode} />
      )}
    </div>
  );
};
