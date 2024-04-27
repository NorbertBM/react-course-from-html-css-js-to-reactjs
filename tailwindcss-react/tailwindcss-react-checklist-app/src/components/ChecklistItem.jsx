import React from "react";
import { IoTrash, IoCheckmarkCircle, IoFlower } from "react-icons/io5";
import TimeCapsule from "./TimeCapsule";
export default function ChecklistItem({ item, index, onToggleCompleted }) {
  const actionsIconsStyle =
    "cursor-pointer text-white hover:bg-white hover:p-0.5 rounded-md transition-all duration-200 ease-in-out";

  const completedStyle = "bg-green-200 hover:bg-green-300 scale-95";
  const notCompletedStyle = "bg-gray-200 hover:bg-gray-400";

  return (
    <li
      className={`${
        item.completed ? completedStyle : notCompletedStyle
      }transition-all duration-200 ease-in-out rounded-md my-2 px-4 py-2 border-1 border-rose-900 shadow-md hover:shadow-none min-h-20 grid grid-cols-12 gap-1 align-center`}
    >
      <div className="flex flex-col gap-y-1 justify-around items-center h-full bg-slate-500 py-1 rounded-md">
        <IoCheckmarkCircle
          onClick={() => onToggleCompleted(item.id)}
          className={
            !item.completed
              ? `${actionsIconsStyle} hover:text-green-700`
              : `${actionsIconsStyle}text-red-400 hover:text-red-700`
          }
        />
        <IoTrash />
        <IoFlower />
        {/* TODO: Actions */}
      </div>
      <div className="col-span-11 h-full flex justify-between items-center gap-4">
        {/* TODO: Item content */}
        <div className="bg-slate-500 text-teal-50 w-8 rounded-full h-8 p-1 text-center shadow-md font-bold">
          {index}
        </div>
        <textarea
          className="bg-transparent w-full h-full border-none focus:outline-none text-xl font-medium hover:cursor-text text-wrap"
          type="text"
          value={item.text}
          disabled
        />
        <div className="min-w-32 flex align-center flex-row gap-1 md:flex-col">
          <TimeCapsule time={item.addedAt} />
          {item.completed && (
            <TimeCapsule time={item.completedAt} completed={item.completed} />
          )}
        </div>
        {/* TODO: Time capsules */}
      </div>
    </li>
  );
}
