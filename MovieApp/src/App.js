import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatSelectionPage = React.lazy(() =>
  import("seatselection/SeatSelection")
);

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const handleMovieClick = (movie) => {
    history.push(`/details/${movie.id}`);
  };

  return (
    <Switch>
      <Suspense fallback={null}>
        <Route path="/details/:id">
          <DetailsPage
            location={location}
            routing={{
              history,
              location,
            }}
          />
        </Route>
        <Route path="/book/:id">
          <SeatSelectionPage
            routing={{
              history,
              location,
            }}
          />
        </Route>
        <Route path="/" exact>
          <HomePage
            movieClicked={handleMovieClick}
            routing={{
              history,
              location,
            }}
          />
        </Route>
      </Suspense>
    </Switch>
  );
};

export default App;
