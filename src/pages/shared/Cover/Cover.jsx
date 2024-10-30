import { Parallax } from 'react-parallax';
const Cover = ({img,title,shortTitle}) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
      className="hero h-[500px]"
    //   style={{
    //     backgroundImage:
    //       `url('${img}')`
    //   }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            {shortTitle}
          </p>
          
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default Cover;