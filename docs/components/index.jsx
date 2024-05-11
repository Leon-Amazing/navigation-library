import React from 'react';
import './index.less';

export default (props) => {
  const { data } = props;
  return (
    <div
      className="my-index-wrap"
      style={{
        backgroundColor: '#f7f9fb',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          padding: '10px 48px 10px',
          display: 'flex',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          marginBottom: '20px',
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                width: '200px',
                height: '50px',
                flexShrink: 0,
                lineHeight: '50px',
                marginRight: '20px',
                cursor: 'pointer',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
              key={item.name}
              onClick={() => {
                window.open(item.link);
              }}
            >
              <img
                src={item.img}
                style={{
                  width: '22px',
                  height: '22px',
                  marginRight: '5px',
                  verticalAlign: 'middle',
                }}
              />
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
