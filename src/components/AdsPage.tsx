import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";

import {ArrowDownIcon} from "./GlobalStyle";
import AdElement from "./AdElement";

const AdsPageStyled = styled.div`
  max-width: 968px;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    max-width: 720px;
  }

  @media screen and (max-width: 720px) {
    max-width: 472px;
  }

  @media screen and (max-width: 472px) {
    max-width: 224px;
  }

  .end-list-info {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #000000;

    display: flex;
    justify-content: center;

    margin: 43px 0;
  }
`

const TitleStyled = styled.div`
  margin: 0 0 16px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;

  color: #2C2C2C;
`

const AdsGridStyled = styled.div`
  display: grid;
  justify-content: center;

  margin: 0 auto;

  --grid-column-count: 4;
  grid-template-columns: repeat(auto-fill, 224px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`

const ShowMoreBtnStyled = styled.div`
  margin: 16px 0 43px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #00A0AB;

  cursor: pointer;
`


function AdsPage() {

    interface Ad {
        id: string,
        oldPrice: string,
        price: string,
        title: string,
        seen: boolean,
        locality: string,
        date: Date
    }

    const [adsList, setAdsList] = useState<Ad[]>([]);
    const [limit, setLimit] = useState(10);

    const getAdsRequest = () => {

        let config = {
            method: 'get',
            url: 'https://6075786f0baf7c0017fa64ce.mockapi.io/products',
            headers: {}
        };

        axios(config)
            .then(function (response: { data: any; }) {
                setAdsList(response.data);
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }

    useEffect(() => {
        getAdsRequest();
    }, []);

    return (
        <AdsPageStyled>
            <TitleStyled>Похожие объявления</TitleStyled>

            <AdsGridStyled>
                {adsList && adsList.slice(0, limit).map((item, index) => {

                    return (
                        <AdElement item={item} index={index}/>
                    )
                })}


            </AdsGridStyled>

            {limit < adsList?.length &&
            <ShowMoreBtnStyled
                onClick={() => limit < adsList?.length && setLimit(limit + 10)}>
                Показать еще
                <ArrowDownIcon/>
            </ShowMoreBtnStyled>}

            {limit === adsList?.length && <div className="end-list-info">Больше нет объявлений...</div>}

        </AdsPageStyled>
    );
}

export default AdsPage;
