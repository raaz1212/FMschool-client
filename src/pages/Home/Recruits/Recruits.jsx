import Marquee from "react-fast-marquee";
import IMG1 from "../../../assets/8D3KJLgv3u.png";
import IMG2 from "../../../assets/db54n2Qqtq.png";
import IMG3 from "../../../assets/dy78FaAKzY.png";
import IMG4 from "../../../assets/frrjmv4vuzwr.png";
import IMG5 from "../../../assets/fvtptbxbmfpu.jpg";
import IMG6 from "../../../assets/gt92u3qjqmcj.png";
import IMG7 from "../../../assets/Lc2BPe4egM.png";
import IMG8 from "../../../assets/MNLgzG9YyC.png";
import IMG9 from "../../../assets/rmsssnhxzav4.png";
import IMG10 from "../../../assets/t5fqtbwxajbg.png";
import IMG11 from "../../../assets/wjwsmmxxzujh.png";
const MarqueeSlider = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-4xl font-bold text-center">Our Students Work At</h1>
      </div>
      <Marquee>
        <div>
          <img
            src={IMG1}
            alt="Image 1"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG2}
            alt="Image 2"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG3}
            alt="Image 3"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG4}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG5}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG6}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG7}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG8}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG9}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG10}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
        <div>
          <img
            src={IMG11}
            alt="Image 4"
            className="w-32 h-40 object-cover rounded-lg mx-8"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
