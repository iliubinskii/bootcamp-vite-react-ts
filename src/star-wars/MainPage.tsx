import {
  selectStarShips,
  updateStarShips,
  useAppDispatch,
  useAppSelector,
} from "./redux-store";

function MainPage() {
  const dispatch = useAppDispatch();

  const starShips = useAppSelector(selectStarShips);

  const update = () => {
    dispatch(updateStarShips());
  };

  return (
    <div className="flex flex-col">
      {JSON.stringify(starShips)}
      <button onClick={update}>Update</button>
    </div>
  );
}

export default MainPage;
