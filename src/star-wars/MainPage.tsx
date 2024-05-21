import PersonsCatalogue from "./PersonsCatalogue";
import {
  selectPeople,
  updatePeople,
  updateStarShips,
  useAppDispatch,
  useAppSelector,
} from "./redux-store";

function MainPage() {
  const dispatch = useAppDispatch();

  const people: any = useAppSelector(selectPeople);

  const update = () => {
    dispatch(updatePeople());
    dispatch(updateStarShips());
  };

  return (
    <div className="flex flex-col">
      <PersonsCatalogue
        people={people}
        imageUrl="https://via.placeholder.com/150"
      />
      <button onClick={update}>Update</button>
    </div>
  );
}

export default MainPage;
