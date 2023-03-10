import React from "react";

function StackItem(props) {
  const { stack } = props;
  return (
    <div className="text-golden text-xs md:text-sm text-center px-2 py-1 rounded-lg my-auto bg-gray-600">
      {stack}
    </div>
  );
}

export default StackItem;
