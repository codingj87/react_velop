import React from "react";

const Hello = ({ name, isSpecial }: { name: string, isSpecial: boolean }) => {
  return (
    <div>
      {isSpecial && <b>*</b>}hello {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름없음"
};

export default Hello;
