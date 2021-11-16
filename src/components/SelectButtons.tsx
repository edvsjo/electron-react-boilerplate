/* eslint-disable no-console */
const SelectButtons = () => {
  return (
    <div>
      <div>
        <h3> input </h3>
        <input type="file" onChange={(e) => console.log(e)} />
      </div>
      <div>
        <h3> output </h3>
        <input type="file" onChange={(e) => console.log(e)} />
      </div>
    </div>
  );
};

export default SelectButtons;
