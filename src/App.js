import React from "react";
import ShoePreview from "./components/ShoePreview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: [{
        img: "https://stockx-360.imgix.net/Air-Jordan-4-Retro-Bred-2019/Images/Air-Jordan-4-Retro-Bred-2019/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1555622524",
        name: "Jordan Bred 4"
      }, {
        img: "https://images-na.ssl-images-amazon.com/images/I/419JoOu471L._AC_.jpg",
        name: "Moon Shoes"
      }, {
        img: "https://media.kohlsimg.com/is/image/kohls/3697022?wid=350&hei=350&op_sharpen=1",
        name: "Avacrocos"
      }]
    }
  }
  render() {
    return (
      <div>
        {/* <ShoePreview 
          shoeImg="https://stockx-360.imgix.net/Air-Jordan-4-Retro-Bred-2019/Images/Air-Jordan-4-Retro-Bred-2019/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1555622524" 
          shoeName="Jordan Bred 4"
        />
        <ShoePreview
          shoeImg="https://images-na.ssl-images-amazon.com/images/I/419JoOu471L._AC_.jpg"
          shoeName="Moon Shoes"
        ></ShoePreview>
        <ShoePreview
          shoeImg="https://media.kohlsimg.com/is/image/kohls/3697022?wid=350&hei=350&op_sharpen=1"
          shoeName="Avacrocos"
        ></ShoePreview> */}
      </div>
    )
  }
}

export default App;