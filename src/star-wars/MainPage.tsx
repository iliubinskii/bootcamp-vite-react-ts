import {
  selectPeople,
  selectStarShips,
  updatePeople,
  updateStarShips,
  useAppDispatch,
  useAppSelector,
} from "./redux-store";

function MainPage() {
  const dispatch = useAppDispatch();

  const people = useAppSelector(selectPeople);

  const starShips = useAppSelector(selectStarShips);

  const update = () => {
    dispatch(updatePeople());
    dispatch(updateStarShips());
  };

  return (
    <div className="flex flex-col">
      <div>{JSON.stringify(people)}</div>
      <div>{JSON.stringify(starShips)}</div>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default MainPage;
