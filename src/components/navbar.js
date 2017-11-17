import React,{Component} from 'react';

class Navbar extends Component{
  render(){
    return (

      <div className="navdiv">
        <ul>
          <li>
            <a href="http://store.steampowered.com/agecheck/app/208650/">--Buy Batman: Arkham Knight</a>
            </li>

            <li>
              <a href="https://www.newegg.com/Product/Product.aspx?Item=N82E16814487338&ignorebbr=1&nm_mc=KNC-GoogleAdwords-PC&cm_mmc=KNC-GoogleAdwords-PC-_-pla-_-Video+Card+-+Nvidia-_-N82E16814487338&gclid=Cj0KCQiAi7XQBRDnARIsANeLIesc2b3PF_gXyxvI4V8Gy1ZfAauT270zjzjGlsBacjfc5mezrrOuphwaAhXyEALw_wcB&gclsrc=aw.ds">--Buy GTX 1080Ti</a>
              </li>
              <li>
                <a href="http://www.trustedreviews.com/guide/upcoming-ps4-games">--Upcoming PS4 Games</a>
                </li>
              </ul>
        </div>

    );
  }
}
export default Navbar;
