import React from 'react';
import { SplitScreen } from '../ui/SplitScreen';
import SalesActivity from './SalesActivity';
import InventorySummary from './InventorySummary';

const DashboardActivites = () => {
  return (
    <SplitScreen leftWeight={3} rightWeight={2}>
        <SalesActivity/>
        <InventorySummary/>
    </SplitScreen>
  )
}

export default DashboardActivites;