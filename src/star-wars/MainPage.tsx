import React from "react";
import PeopleCatalogue from "./PeopleCatalogue";
import {
  selectPeople,
  selectPeopleNext,
  selectPeoplePrev,
  updatePeople,
  useAppDispatch,
  useAppSelector,
} from "./redux-store";

function MainPage() {
  const dispatch = useAppDispatch();

  const people = useAppSelector(selectPeople);

  const peopleNext = useAppSelector(selectPeopleNext);

  const peoplePrev = useAppSelector(selectPeoplePrev);

  const next = () => {
    dispatch(updatePeople(peopleNext));
  };

  const prev = () => {
    dispatch(updatePeople(peoplePrev));
  };

  React.useEffect(() => {
    if (people.length || peopleNext || peoplePrev) {
      // Initial loading done
    } else dispatch(updatePeople(undefined));
  }, [dispatch, people.length, peopleNext, peoplePrev]);

  return (
    <div className="flex flex-col p-5 gap-5">
      <div className="flex justify-center gap-5">
        {peoplePrev ? (
          <button
            onClick={prev}
            className="bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-400"
          >
            Prev
          </button>
        ) : undefined}
        {peopleNext ? (
          <button
            onClick={next}
            className="bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-400"
          >
            Next
          </button>
        ) : undefined}
      </div>
      <PeopleCatalogue
        people={people}
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default MainPage;
