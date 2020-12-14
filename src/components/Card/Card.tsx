import React, { useState } from "react";
import CardStyles from "./Card.styles";
import food from "./bg1.jpg";
import user from "./user.svg";
import kitchen from "./kitchen-tools.svg";
import SelectionSquare from "../SelectionSquare/SelectionSquare";
import CoolButton from "../CoolButton/CoolButton";

interface CardProps {
  children: any;
}

const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  const CSS = CardStyles.Factory();
  const [people, setPeople] = useState(1);
  const [week, setWeek] = useState(1);

  const price = (input:string) => +input * people * week;
  return (
    <>
      <div style={CSS.Card()}>
        <div style={CSS.Picture()}>
          <img
            src={food}
            alt="food"
            style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: 12 }}
          />
        </div>

        <div style={CSS.CardContent()}>
          <div style={CSS.CardContentC13()}>
            <div style={CSS.text(1.75, CSS.black, "center", "bold")}>
              Gostou e ainda não é assinante?
            </div>
            <div style={CSS.text(1.75, CSS.black, "center", "bold")}>
              Escolha já um plano semanal!
            </div>
          </div>

          <div style={CSS.CardContentC2()}>
            {[
              {
                id: "pp",
                tx1: "Receita para",
                tx2: "quantas pessoas?",
                pic: user,
                enum: [1, 2],
              },
              {
                id: "wk",
                tx1: "Quantas receitas",
                tx2: "por semana??",
                pic: kitchen,
                enum: [1, 2, 3],
              },
            ].map((obj, i) => (
              <div key={i} style={CSS.CardContentC2inner()}>
                <div style={CSS.container()}>
                  <div style={{ margin: "10px" }}>
                    <img src={obj.pic} alt={obj.pic + ""} height="30px" />
                  </div>
                  <div>
                    <div style={CSS.text(1, CSS.green, "start")}>{obj.tx1}</div>
                    <div style={CSS.text(1, CSS.green, "start")}>{obj.tx2}</div>
                  </div>
                </div>

                <div style={CSS.container()}>
                  {obj.enum.map((el, i) => (
                    <div
                      key={i}
                      style={{ margin: "15px 5px" }}
                      onClick={() => {
                        obj.id === "pp" && setPeople(el);
                        obj.id === "wk" && setWeek(el);
                      }}
                    >
                      {(obj.id === "pp" && people === el) ||
                      (obj.id === "wk" && week === el) ? (
                        <SelectionSquare selected>{el}</SelectionSquare>
                      ) : (
                        <SelectionSquare>{el}</SelectionSquare>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={CSS.CardContentC13()}>
            <div
              style={{
                ...CSS.container("row", CSS.mobile ? "center" : "start"),
                width: "100%",
              }}
            >
              <div style={CSS.text(1, CSS.grey2)}>PREÇO DO KIT POR MES</div>
            </div>

            <div
              style={{
                ...CSS.container(
                  CSS.mobile ? "column" : "row",
                  "space-between"
                ),
                width: "100%",
              }}
            >
              <div style={{ margin: "10px" }}>
                <span style={CSS.text(1, CSS.red)}>RS </span>
                <span style={{ ...CSS.text(3, CSS.red), height: "40px" }}>
                  {price(children.price)}
                </span>
              </div>

              <div
                style={{ width: CSS.mobile ? "100%" : "", ...CSS.container() }}
              >
                <CoolButton onClick={children.sub}>
                  {`${CSS.mobile ? "A" : "Quero a"}ssinar agora!`}
                </CoolButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
