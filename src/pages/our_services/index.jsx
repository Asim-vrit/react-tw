import { fetchProductsAxios } from "../../api/services/ProductServices";
import { useApiCall } from "../../hooks/useApiCall";
import { useCounter } from "../../hooks/useCounter";

function OurServices() {
  const { count, setCount, state, setState } = useCounter();
  const { data, error, loading } = useApiCall(fetchProductsAxios);

  return (
    <div>
      {loading && "loading...."}
      {data && "Data fetched  successfully"}
      {error && "Something went wrong"}
      OurServices {state}{" "}
      <button
        className=" border-2 px-5 rounded-3xl bg-amber-300"
        onClick={() => {
          setCount(count + 1);
          setState(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default OurServices;
