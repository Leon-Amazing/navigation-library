import React from 'react';
import './index.less';

export default (props) => {
  const { data } = props;
  return (
    <div className="my-index-wrap">
      <div className='my-index'>
        {data.map((item) => {
          return (
            <div
              className='my-index-item'
              key={item.link}
              onClick={() => {
                window.open(item.link);
              }}
            >
              <img
                className='my-index-item-img'
                src={item.img} />
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
