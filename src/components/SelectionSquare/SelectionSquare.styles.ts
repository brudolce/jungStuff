import AppStyles from '../../App.styles';

export default class SelectionSquareStyles extends AppStyles {
  


    public SelectionSquare(selected:boolean, sizeReference:number=2):Object {
      return ({

        borderRadius: 6.25 * sizeReference,
        width: 25 * sizeReference,
        height: 25 * sizeReference,
        backgroundColor: selected ? this.green : this.white ,
        ...this.text(sizeReference,selected ? this.white : this.grey2),
        ...this.container()
      })
    };
  

  static Factory(): SelectionSquareStyles {
    return new SelectionSquareStyles();
  }
}
