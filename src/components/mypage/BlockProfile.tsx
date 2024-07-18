type BlockProfiletype = {
  profileImg: string;
  profileId: string;
};

const BlockProfile = (props: BlockProfiletype) => {
  return (
    <div className="mt-[1.5rem] w-[45rem] h-[3rem] flex justify-evenly items-center">
      <div className="  relative w-[3rem] h-[3rem] bg-Light_Layout-100 rounded-full dark:bg-Dark_Layout-100">
        <img
          src={props.profileImg}
          alt="User"
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center items-center text-[1rem] text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
        {props.profileId}
      </div>
      <button className="w-[5.75rem] h-[1.5625rem] bg-Light_Layout-100 font-pre text-Light_Text_AboutMe text-[0.8rem] rounded-[1.5625rem]">
        해제
      </button>
    </div>
  );
};

export default BlockProfile;
