import { CancelBtn, EditBtn, SaveBtn } from 'src/components/atoms/buttons';

type Props = {
  title?: string;
  canEditTitle: boolean;
  editTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  saveTitle: () => void;
  turnOnTitleEditMode: () => void;
  turnOffTitleEditMode: () => void;
};

export const MemoTitle = (props: Props) => {
  const { title, canEditTitle, editTitle, saveTitle, turnOnTitleEditMode, turnOffTitleEditMode } =
    props;

  return (
    <div className="flex justify-between items-center gap-5 mb-5">
      {canEditTitle ? (
        <>
          <input
            type="text"
            className="text-2xl font-bold w-full pl-[30px] py-1.5"
            defaultValue={title}
            onChange={editTitle}
          />
          <div className="w-[90px] h-10">
            <div className="flex gap-2.5">
              <CancelBtn turnOffEditMode={turnOffTitleEditMode} />
              <SaveBtn saveMemo={saveTitle} />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl font-bold w-full pl-[30px] py-1.5">{title}</p>
          <div className="w-[90px] h-10">
            <EditBtn turnOnEditMode={turnOnTitleEditMode} />
          </div>
        </>
      )}
    </div>
  );
};
