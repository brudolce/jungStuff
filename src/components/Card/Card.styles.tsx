import AppStyles from "../../App.styles";

export default class CardStyles extends AppStyles {
  public Card(sizeReference: number = 2): Object {
    return {
      maxWidth: this.mobile && "500px",
      margin: "30px",
      backgroundColor: this.white,
      borderRadius: 12,
      ...this.container(this.mobile ? "column" : "row"),
    };
  }

  public Picture(): Object {
    return {
      width: this.mobile ? "100%" : "400px",
      height: !this.mobile && "450px",
    };
  }

  public CardContent(): Object {
    return {
      ...this.container("column"),
      width: !this.mobile ? "585px" : "100%",
    };
  }

  public CardContentC13(): Object {
    return {
      ...this.container("column"),
      margin: "20px 0",
      width: this.mobile ? "90%" : "550px",
    };
  }

  public CardContentC2(): Object {
    return {
      margin: "10px 0",
      backgroundColor: this.grey,
      borderRadius: 12.5,
      width: this.mobile ? "90%" : "550px",
      height: !this.mobile && "200px",

      ...this.container(this.mobile ? "column" : "row", "space-around"),
    };
  }

  public CardContentC2inner(): Object {
    return {
      margin: "10px",
      ...this.container("column"),
      width: !this.mobile && "45%",
    };
  }

  static Factory(): CardStyles {
    return new CardStyles();
  }
}
