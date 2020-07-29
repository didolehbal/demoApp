import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/actions/entities";
import { Meal } from "../types";
import MealCard from "../components/MealCard";
import Loading from "../components/Loading";

export default function Home() {
  const { data, loading, error } = useSelector(
    (state: any) => state.entities.meals
  );

  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll("meals"));
  }, []);

  // fetching meals from API after mounting
  // showring loading while fetching
  // rendering meal cards
  return (
    <Container>
      <h1>Home</h1>
      <Row>
        {loading ? (
          <Loading />
        ) : (
          data?.map((meal: Meal) => <MealCard key={meal.id} {...meal} />)
        )}
      </Row>
      <Link to="/meal">go to meal</Link>
    </Container>
  );
}
