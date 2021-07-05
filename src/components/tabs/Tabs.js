import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { StyledTabs, StyledTabsContent, StyledTab } from './tabs.styles';
import { StyledIcon } from '../navigation/navigation.styles';
import { HomeOutlined } from '@material-ui/icons';

const Tab = ({ leadingIcon, title, onClick, ...rest }) => {
  return (
    <StyledTab onClick={onClick} {...rest}>
      {leadingIcon && (
        <StyledIcon>
          <HomeOutlined />
        </StyledIcon>
      )}
      {title}
    </StyledTab>
  );
};

const Tabs = ({ direction, items, components }) => {
  const [activeTab, setActiveTab] = useState(0);
  const CustomTab = components[activeTab];
  return (
    <>
      <StyledTabs direction={direction}>
        {items.map(({ title, leadingIcon, trailingIcon }, index) => (
          <Tab
            title={title}
            leadingIcon={leadingIcon}
            trailingIcon={trailingIcon}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : undefined}
          />
        ))}
      </StyledTabs>
      <StyledTabsContent>
        <CustomTab />
      </StyledTabsContent>
    </>
  );
};

Tabs.propTypes = {
  direction: string.isRequired,
  items: arrayOf(shape({ title: string.isRequired, url: string.isRequired })),
};

Tabs.defaultProps = { direction: 'horizontal', items: [] };

export default Tabs;
