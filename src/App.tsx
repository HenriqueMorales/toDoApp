import { useState } from "react";
import Item from "./Item";
import Section from "./Section";
import { IoAddCircle } from "react-icons/io5";

function App() {
  const [list, setList] = useState<string[]>(["Order groceries", "Work", "Finish article"]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // check for empty string
    setList((list) => [...list, inputValue]);
    setInputValue("");
  };

  const deleteItem = (itemId: number) => {
    setList((prevList) =>
      prevList.filter((item: string, index: number) => index !== itemId)
    );
  };
  return (
    <>
      <h1 className="p-4 text-3xl text-center bg-[#222831] text-[#76ABAE]">
        toDoApp using Typescript and Tailwind
      </h1>
      <Section>
        <form className="flex gap-4  bg-[#222831] ">
          <input
            type="text"
            placeholder="Add item..."
            value={inputValue}
            onChange={handleChange}
            className="  w-[100%] outline-none bg-[#222831] text-[#76ABAE] placeholder:text-[#76ABAE] text-2xl"
          ></input>
          <button onClick={handleClick}>
            <IoAddCircle size={"40"} color={"#76ABAE"} />
          </button>
        </form>
      </Section>
      <Section>
        {list.length > 0 ? (
          list.map((element, index) => (
            <Item
              key={index}
              text={element}
              deleteItem={deleteItem}
              id={index}
            />
          ))
        ) : (
          <p className=" text-2xl text-[#76ABAE]">No items.</p>
        )}
      </Section>
    </>
  );
}

export default App;
