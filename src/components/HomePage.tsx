import React, { PropsWithChildren } from "react";

// interface IContact {
//   id: number;
// }

export const HomePage: React.FC<IHomePageProps> = ({
  username,
  greeting,
  children,
}) => {
  const [count, setCount] = React.useState(0);
  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setCount((ps: number) => ps + 1);
  };
  return (
    <>
      <h2>
        {greeting} {username}
      </h2>
      <h2>{children}</h2>
      <h3>Count {count}</h3>
      <button onClick={handleClick}>+</button>
    </>
  );
};

interface IHomePageProps extends PropsWithChildren {
  username: string;
  greeting: string;
  //   children: React.ReactNode;
}
