import { CancelBtn, EditBtn, SaveBtn } from 'src/components/atoms/buttons';

type Props = {
  body?: string;
  canEditBody: boolean;
  editBody: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveBody: () => void;
  turnOnBodyEditMode: () => void;
  turnOffBodyEditMode: () => void;
};

export const MemoBody = (props: Props) => {
  const { body, canEditBody, editBody, saveBody, turnOnBodyEditMode, turnOffBodyEditMode } = props;

  return (
    <div className="h-[calc(100vh_-_214px)] flex justify-between gap-5">
      {canEditBody ? (
        <>
          <textarea className="w-full h-full rounded-xl  pt-[30px] px-[30px]" onChange={editBody}>
            {body}
          </textarea>
          <div className="w-[90px] h-10">
            <div className="flex gap-2.5">
              <CancelBtn turnOffEditMode={turnOffBodyEditMode} />
              <SaveBtn saveMemo={saveBody} />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="w-full rounded-xl bg-white pt-[30px] px-[30px] overflow-auto whitespace-pre-wrap">
            {body}
          </p>
          <div className="w-[90px] h-10">
            <div className="flex gap-2.5">
              <EditBtn turnOnEditMode={turnOnBodyEditMode} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
