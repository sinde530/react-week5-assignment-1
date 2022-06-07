import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from './action';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.region.id,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Regions
      regions={regions}
      selectedId={selectedRegionId}
      updateSelectedOption={updateSelectedRegion}
    />
  );
}
