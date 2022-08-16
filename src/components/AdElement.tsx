import React, {useState} from 'react';
import {CarIcon, CompareIcon, ExcludeIcon, LikeIcon} from "./GlobalStyle";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";

interface Props {
    seen: boolean;
    index: number;
}

const AdElementStyled = styled.div<Props>`
  width: 224px;
  height: 368px;
  background: ${(props) => props.seen ? "#FFF6A5" : "#FFFFFF"};
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  border-radius: 8px;

  .promo-element-image {
    width: 224px;
    height: 260px;
    border-radius: 8px 8px 0 0;
  }

  .seen-icon {
    display: ${(props) => props.seen ? "block" : "none"};
    width: 94px;
    height: 24px;
    background: rgba(44, 44, 44, 0.74);
    border-radius: 8px;
    margin: 0 auto;
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;

    color: #FFFFFF;
  }

  .column-icons {

  }

  .promo-element-info {
    display: flex;
    flex-direction: column;
    height: 96px;
    padding: 0 12px 12px 12px;
  }


  .row-icons {
    margin: 4px 0 0 0;
  }

  .old-price {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #5A5A5A;
    text-decoration: line-through;

  }

  .old-price:after {
    content: " \\20BD";
  }

  .new-price {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;

    color: #2C2C2C;
  }

  .new-price:after {
    content: " \\20BD";
  }

  .title {
    margin-top: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    color: #2C2C2C;
  }

  .location-date-info {
    display: flex;
    flex-direction: row;
    margin-top: 14px;
  }

  .location-date-info .location {
    width: 103px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8F8F8F;
  }

  .location-date-info .date {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #8F8F8F;
  }
`

interface Ad {
    id: string,
    oldPrice: string,
    price: string,
    title: string,
    seen: boolean,
    locality: string,
    date: Date
}


function AdElement({item, index}: { item: Ad, index: number }) {
    const [loading, setLoading] = useState(true);

    let date = new Date(item.date);
    let dateStr =
        ("00" + (date.getMonth() + 1)).slice(-2) + "." +
        ("00" + date.getDate()).slice(-2) + "." +
        date.getFullYear() + ", " +
        ("00" + date.getHours()).slice(-2) + "." +
        ("00" + date.getMinutes()).slice(-2);

    return (
        <AdElementStyled key={index} seen={item.seen} index={index}>
            {loading && <LoadingSpinner/>}
            <div>
                <img className="promo-element-image" src={`https://source.unsplash.com/random/${index}`}
                     onLoad={() => setLoading(false)} alt={"ad_image"}/>
                <div className="seen-icon">Просмотрено</div>
                <div className="column-icons">
                    <CompareIcon/>
                    <LikeIcon/>
                </div>
            </div>

            <div className="promo-element-info">
                <div style={{display: "inline-flex", justifyContent: "space-between"}}>
                    <div>
                        <div className="old-price">{item.oldPrice}</div>
                        <div className="new-price">{item.price}</div>
                        <div className="title">{item.title}</div>
                    </div>

                    <div className="row-icons">
                        <CarIcon/>
                        <ExcludeIcon/>
                    </div>
                </div>
                <div className="location-date-info">
                    <div className="location">{item.locality}</div>
                    <div className="date">{dateStr}</div>
                </div>

            </div>
        </AdElementStyled>
    );
}

export default AdElement;
