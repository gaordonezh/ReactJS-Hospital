import navitems from "./itemsNav";
import userDetails from "utils/userDetails";
//-----------------------|| MENU ITEMS ||-----------------------//

const { rol } = userDetails;

let tmpArr = [];
navitems.forEach((rowOne) => {
  if (rowOne.roles.includes(rol)) {
    tmpArr.push({ ...rowOne, children: [] });
    rowOne.children.forEach((rowTwo) => {
      if (rowTwo.roles.includes(rol)) {
        let iOne = tmpArr.length - 1;
        if (rowTwo.children) {
          tmpArr[iOne].children.push({ ...rowTwo, children: [] });
          rowTwo.children.forEach((rowThree) => {
            if (rowThree.roles.includes(rol)) {
              let iTwo = tmpArr[iOne].children.length - 1;
              tmpArr[iOne].children[iTwo].children.push(rowThree);
            }
          });
        } else {
          tmpArr[iOne].children.push(rowTwo);
        }
      }
    });
  }
});

export default tmpArr;
