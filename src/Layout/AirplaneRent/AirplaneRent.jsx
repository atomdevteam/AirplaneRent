import ListAircraft from './ListAircraft/ListAircraft';
import ExclusiveOffer from '../../components/ExclusiveOffer/ExclusiveOffer';

const AirplaneRent = () => {

  return (
    <div className='flex flex-col-reverse sm:flex-row'>
      <ListAircraft />
      <ExclusiveOffer />
    </div>
  )

}

export default AirplaneRent

