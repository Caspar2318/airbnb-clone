"use client"; // to set this component as clent component instead of defaulted server component

interface ContainerProsp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProsp) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
