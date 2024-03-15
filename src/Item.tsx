import { MdDelete } from "react-icons/md";

const Item = (props: { text: string; deleteItem: Function; id?: number }) => {
  return (
    <div className="flex justify-between gap-4 border-b py-2 bg-[#222831]">
      <p className="text-2xl truncate text-[#76ABAE]">{props.text}</p>
      <button onClick={() => props.deleteItem(props.id)}>
        <MdDelete size={"40"} color={"#76ABAE"} />
      </button>
    </div>
  );
};

export default Item;
