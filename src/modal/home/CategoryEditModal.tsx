import { instance } from '@/api/axios';
import { useState } from 'react';
import { PublicIcon, FriendOnlyIcon, PrivateIcon, CheckIcon, ToggleIcon } from '@/assets/svg/home/category';
import { OnCloseIcon } from '@/assets/svg/home/modal';
import useModal from '@/hooks/useModal';
import useCategoryState from '@/store/home/categoryStateStore';

interface CategoryEditModalProps {
  onClose: () => void;
  editContents: { id: number; scope: string; color: string; contents: string; isActivated: boolean };
}

const CategoryEditModal = ({ onClose, editContents }: CategoryEditModalProps) => {
  const { Modal, open, close } = useModal();

  const changeRefresh = useCategoryState((state) => state.changeRefresh);

  const filterActivated = useCategoryState((state) => state.filterActivated);
  const filterInActivated = useCategoryState((state) => state.filterInActivated);

  const [isColorButton, setIsColorButton] = useState(false);
  const [isActivatedButton, setIsActivatedButton] = useState(editContents.isActivated);
  const [isSharedButton, setIsSharedButton] = useState(false);

  const [isShared, setIsShared] = useState(editContents.scope);
  const [isColor, setIsColor] = useState(editContents.color);

  const [content, setContent] = useState(editContents.contents);
  const [httpStatusCode, setHttpStatusCode] = useState(0);

  const handleOnClickButton = (prop: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      if (prop === 'shared') {
        setIsSharedButton(!isSharedButton);
      } else if (prop === 'color') {
        setIsColorButton(!isColorButton);
      } else if (prop === 'activated') {
        setIsActivatedButton(!isActivatedButton);
      }
    };
  };

  const handleOnClickShared = (shared: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setIsShared(shared);
      setIsSharedButton(!isSharedButton);
    };
  };

  const handleOnClickColor = (color: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setIsColor(color);
      setIsColorButton(!isColorButton);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 12) {
      e.target.value = e.target.value.slice(0, 12);
    }

    setContent(e.target.value);
  };

  const handleChangeButton = () => {
    instance
      .patch(`/categories/${editContents.id}`, {
        contents: content || '\u00A0',
        scope: isShared,
        color: isColor,
        isActivated: isActivatedButton,
      })
      .then(() => {
        changeRefresh();
        onClose();
      })
      .catch((error) => {
        console.error('카테고리 삭제 에러:', error);
      });
  };

  const handleDelButton = () => {
    instance
      .delete(`/categories/${editContents.id}`)
      .then((response) => {
        if (response.data.header.httpStatusCode === 400) {
          setHttpStatusCode(response.data.header.httpStatusCode);
        } else {
          setHttpStatusCode(response.data.header.httpStatusCode);
          filterActivated(editContents.id);
          filterInActivated(editContents.id);
          onClose();
        }
      })
      .catch((error) => {
        console.error('카테고리 삭제 에러:', error);
      });
  };

  return (
    <div className="relative flex flex-col items-center w-[25rem] h-[35rem] overflow-y-auto p-10 scrollbar-hide rounded-2xl  bg-Light_Layout-300 dark:bg-Dark_Layout-300">
      <button onClick={onClose}>
        <OnCloseIcon className="absolute w-3 right-7 top-7 dark:fill-Dark_Text_Contents" />
      </button>
      <h2 className="mt-4 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
        카테고리 수정
      </h2>
      <div className="w-full mt-9">
        <div className="w-full mb-12">
          <p className="text-sm text-left text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
            제목
          </p>
          <input
            type="text"
            value={content}
            maxLength={12}
            className="w-full py-1 text-sm border-b outline-none border-Light_Layout-100 text-Light_Text_Name bg-Light_Layout-300 border-b-1 caret-Dark_Text_Contents placeholder:text-Dark_Text_Contents dark:bg-Dark_Layout-300 dark:border-Dark_Layout-400 dark:placeholder:text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name dark:caret-Dark_Layout-400"
            placeholder="카테고리 제목을 입력하세요. (12자 이내만 입력됩니다.)"
            onChange={handleChange}
          />
        </div>
        <div className="relative flex flex-col w-full pb-1 mb-12 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
          <div className="flex items-center justify-between">
            <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon ">공개설정</p>
            <button onClick={handleOnClickButton('shared')} className="flex items-center justify-center">
              {isShared === 'PUBLIC' ? (
                <>
                  <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                  <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                    전체공개
                  </p>
                </>
              ) : isShared === 'FRIENDS' ? (
                <>
                  <FriendOnlyIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                  <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                    친구공개
                  </p>
                </>
              ) : (
                <>
                  <PrivateIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                  <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                    나만보기
                  </p>
                </>
              )}
              {isSharedButton ? (
                <>
                  <ToggleIcon className="w-2.5 rotate-180 transition-all dark:fill-Dark_Text_Contents" />
                </>
              ) : (
                <>
                  <ToggleIcon className="w-2.5 rotate-0 transition-all dark:fill-Dark_Text_Contents" />
                </>
              )}
            </button>
          </div>
          {isSharedButton ? (
            <div className="absolute right-0 z-10 shadow-lg top-7 rounded-xl bg-Light_Layout-400 dark:bg-Dark_Layout-400">
              <button onClick={handleOnClickShared('PUBLIC')} className="flex items-center px-5 pt-4 pb-3">
                <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                  전체공개
                </p>
              </button>
              <button
                onClick={handleOnClickShared('FRIENDS')}
                className="flex items-center px-5 py-3 border-y border-Light_Layout-200 dark:border-Dark_Layout-500"
              >
                <FriendOnlyIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                  친구공개
                </p>
              </button>
              <button onClick={handleOnClickShared('PRIVATE')} className="flex items-center px-5 pt-3 pb-4">
                <PrivateIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                  나만보기
                </p>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col w-full pb-1 mb-12 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
          <div className="flex items-center justify-between">
            <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">색상</p>
            <button onClick={handleOnClickButton('color')} className="flex items-center">
              {isColorButton ? (
                <>
                  <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor.toLowerCase()}`} />
                  <ToggleIcon className="w-2.5 rotate-180 transition-all dark:fill-Dark_Text_Contents" />
                </>
              ) : (
                <>
                  <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor.toLowerCase()}`} />
                  <ToggleIcon className="w-2.5 rotate-0 transition-all dark:fill-Dark_Text_Contents" />
                </>
              )}
            </button>
          </div>
          {isColorButton ? (
            <div className="flex mt-2 mb-1 ml-auto">
              <button
                onClick={handleOnClickColor('SKYBLUE')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay6 bg-skyblue"
              />
              <button
                onClick={handleOnClickColor('PINK')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay5 bg-pink"
              />
              <button
                onClick={handleOnClickColor('BLUE')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay4 bg-blue"
              />
              <button
                onClick={handleOnClickColor('SALMON')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay3 bg-salmon"
              />
              <button
                onClick={handleOnClickColor('PURPLE')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay2 bg-purple"
              />
              <button
                onClick={handleOnClickColor('YELLOW')}
                className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay1 bg-yellow"
              />
              <button onClick={handleOnClickColor('GREEN')} className="w-5 h-5 mr-4 rounded-full bg-green" />
            </div>
          ) : (
            <div className="transition-all" />
          )}
        </div>
        <div className="flex items-center justify-between w-full pb-1 mb-4 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
          <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">활성화</p>
          {isActivatedButton ? (
            <button
              onClick={handleOnClickButton('activated')}
              className="w-5 h-5 flex items-center justify-center border-[0.0938rem] rounded-[0.1875rem] border-Button"
            >
              <CheckIcon className="w-2.5 fill-Button" />
            </button>
          ) : (
            <button
              onClick={handleOnClickButton('activated')}
              className="w-5 h-5 border-[0.0938rem] rounded-[0.1875rem] border-Dark_Text_Contents dark:border-Light_CategoryText_Icon_Contents"
            />
          )}
        </div>
        <button onClick={open} className="w-full">
          <p className="font-medium text-right text-error hover:font-bold">삭제하기</p>
        </button>
      </div>
      <div className="grow" />
      <button
        onClick={handleChangeButton}
        className="w-full font-medium min-h-9 rounded-3xl bg-Button text-Light_Layout-400"
      >
        저장
      </button>
      <Modal>
        {httpStatusCode === 400 ? (
          <div className="flex flex-col items-center h-full px-8 pb-10 pt-14 bg-Light_Layout-200 dark:bg-Dark_Layout-300 rounded-2xl">
            <p className="font-medium text-Dark_Layout-400 dark:text-Dark_Text_Name">
              베팅이 진행중이므로 삭제할 수 없습니다.
            </p>
            <button
              onClick={close}
              className="py-1 mt-10 font-medium px-14 text-Light_Layout-400 bg-Button rounded-3xl"
            >
              확인
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center h-full px-6 pb-10 pt-14 bg-Light_Layout-200 dark:bg-Dark_Layout-300 rounded-2xl">
            <p className="text-lg font-medium text-Dark_Layout-400 dark:text-Dark_Text_Name">
              카테고리를 삭제하시겠습니까?
            </p>
            <p className="mt-3 text-sm text-Dark_Layout-400 dark:text-Dark_Text_Contents">
              카테고리 삭제 시, 등록한 투두가 모두 삭제됩니다.
            </p>
            <div className="flex justify-around mt-16">
              <button
                onClick={handleDelButton}
                className="py-1 mr-5 font-medium transition-colors border-2 px-14 text-Button border-Button rounded-3xl hover:bg-Button hover:text-Light_Layout-400"
              >
                삭제
              </button>
              <button
                onClick={close}
                className="py-1 font-medium transition-colors border-2 px-14 text-Button border-Button rounded-3xl hover:bg-Button hover:text-Light_Layout-400"
              >
                취소
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CategoryEditModal;
