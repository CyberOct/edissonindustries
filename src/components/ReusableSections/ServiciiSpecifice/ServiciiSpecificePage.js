import React from 'react';
import { MainWrapper, ContentWrapper, TextWrapper, ServicesNavWrapper, ServicesNavUl, ServiceLink } from './ServiciiSpecificePageStyle'
import { Heading, Subtitle, UnorderedListWrapper, UnorderedList, ListElement, CheckBoxIcon } from '../ReusableSection/ReusableSectionStyle'
import {PathData} from './Data'
const ServiciiSpecificePage = (props) => {
 return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Subtitle>{props.continut1}</Subtitle>
            <Heading>{props.titlu}</Heading>
            <UnorderedListWrapper>
              <UnorderedList>
                <ListElement><CheckBoxIcon /><span>{props.listElement1}</span></ListElement>
                <ListElement><CheckBoxIcon /><span>{props.listElement2}</span></ListElement>
              </UnorderedList>
              <span></span>
              <UnorderedList>
                <ListElement><CheckBoxIcon /><span>{props.listElement3}</span></ListElement>
                <ListElement><CheckBoxIcon /><span>{props.listElement4}</span></ListElement>
              </UnorderedList>
            </UnorderedListWrapper>
            <Subtitle>{props.continut2}</Subtitle>
          </TextWrapper>
          <ServicesNavWrapper>
            <ServicesNavUl>
              {PathData.map((serviciu) =>
                <ServiceLink key={serviciu.serviciu} to={serviciu.path}><span></span>{serviciu.serviciu}</ServiceLink>
              )}
            </ServicesNavUl>
          </ServicesNavWrapper>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}

export default ServiciiSpecificePage;