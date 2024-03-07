import Logbook from "../../../../components/Logbook/Logbook"
import AirplaneHistory from "../../../../components/AirplaneHistory/AirplaneHistory"
import PersonalDetails from "../../../../components/PersonalDetails/PersonalDetails"
import FlightStatistics from "../../../../components/FlightStatistics/FlightStatistics"
import AdditionalPersonalInformation from "../../../../components/AdditionalPersonalInformation/AdditionalPersonalInformation"

const Dashboard = () => {

    return (
        <div className=''>
            <div className="flex flex-col">
                <div className="flex flex-col pt-10 sm:flex-row mx-8">
                    <PersonalDetails />
                    <FlightStatistics />
                </div>
                <div className="flex flex-col pt-10 mx-8  sm:flex-row  items-center justify-center ">
                    <AdditionalPersonalInformation />
                </div>
                <div className="flex flex-col pt-10  sm:flex-row mx-8 my-8">
                    <AirplaneHistory />
                    <Logbook />
                </div>
            </div>
        </div>
    )
}

export default Dashboard