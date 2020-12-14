export default class AppStyles {

  public black:string = 'black';
  public white:string = 'white'; 
  public grey:string = '#efefef';
  public grey2:string = 'grey'
  public green:string = 'green';
  public red:string = 'red';
  public mobile:boolean = window.innerWidth < 1045

  public text(size:number=1, colour:string=this.black, align:string="center", thick:string="normal"):Object{
    return ({
      fontSize:`${size*12}px`,
      textAlign: align,
      color: colour,
      fontWeight: thick
    })
  }

  public container(direction:string = 'row',justify='center',wrap='wrap'):Object {
    return ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: justify,
      flexWrap: wrap,
      flexDirection: direction
    })
  }

  public page():Object {
    return ({
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: this.grey
    })
  }

  static factory(): AppStyles {
    return new AppStyles();
  }
}
