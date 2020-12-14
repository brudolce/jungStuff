import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AppStyles from "../../App.styles";
import Card from "../../components/Card/Card";
import { LIST_PLANS, SUBSCRIBE_TO_PLAN } from "../../graphql/queries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Home: React.FC = () => {
  const CSS = AppStyles.factory();

  const { loading, error, data } = useQuery(LIST_PLANS);
  const [subscribe] = useMutation(SUBSCRIBE_TO_PLAN);
  const plans = data?.listPlans;

  const handleSub = async (input: any) => {
    const res = await subscribe({ variables: { id: input } });
    if (res.errors) {
      toast.warn("Error1", { autoClose: 2000 });
    } else {
      toast.success("Success!", { autoClose: 2000 });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div
      style={
        { ...CSS.page(), ...CSS.container("column") } as React.CSSProperties
      }
    >
      <div
        style={{
          ...CSS.text(2, CSS.black, "center", "bold"),
          maxWidth: "360px",
          margin: "20px 0 0 0",
        }}
      >
        Configure o plano que melhor encaixa na sua rotina.
      </div>

      {plans?.map((plan: any, i: any) => (
        <div key={i}>
          <Card>
            {{
              price: plan.price,
              sub: () => handleSub(plan.id),
            }}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
