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

  const people = useAppSelector(selectPeople);

  // TODO: Use useEffect
  const update = () => {
    dispatch(updatePeople());
    dispatch(updateStarShips());
  };

  return (
    <div className="flex flex-col p-5 gap-5">
      <PersonsCatalogue
        people={people}
        imageUrl="https://via.placeholder.com/150"
      />
      <div className="flex justify-center">
        <button
          onClick={update}
          className="bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-400"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default MainPage;
