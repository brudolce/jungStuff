import AppStyles from '../../App.styles';

export default class CoolButtonStyles extends AppStyles {
  


    public coolButton():Object {
      return ({

        borderRadius: 25,
        width: this.mobile ? '80%' : '300px',
        height: '40px',
        backgroundColor: this.green,
        ...this.text(1.5,this.white),
        ...this.container(), 
        border: 'none'
      })
    };
  

  static Factory(): CoolButtonStyles {
    return new CoolButtonStyles();
  }
}
