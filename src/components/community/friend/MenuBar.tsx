const MenuBar = () => {
  return (
    <fieldset className="flex w-[26rem] h-[2.5rem] bg-Light_Layout-100 rounded-lg">
      <input
        className="hidden [&:checked+label]:border-Dark_Text_AboutMe [&:checked+label]:bg-Dark_Text_Name [&:checked+label]:border-[0.0835rem]"
        type="radio"
        id="search"
        value="search"
        name="menuMode"
        checked
      />

      <label
        htmlFor="search"
        className="flex h-[2.5rem] items-center justify-center rounded-lg bg-Light_Layout-100   w-1/2 "
      >
        검색
      </label>
      <input
        className="hidden [&:checked+label]:border-Dark_Text_AboutMe [&:checked+label]:bg-Dark_Text_Name [&:checked+label]:border-[0.0835rem]"
        type="radio"
        id="list"
        value="list"
        name="menuMode"
      />

      <label
        htmlFor="list"
        className="flex h-[2.5rem] items-center justify-center rounded-lg bg-Light_Layout-100  w-1/2 "
      >
        목록
      </label>
    </fieldset>
  );
};

export default MenuBar;
