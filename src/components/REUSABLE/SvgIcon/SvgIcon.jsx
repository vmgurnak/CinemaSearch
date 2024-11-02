export const SvgIcon = ({ addClass, icon }) => {
  return (
    <svg className={addClass}>
      <use href={icon}></use>
    </svg>
  );
};
