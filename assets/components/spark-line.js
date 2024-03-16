import { Sparklines, SparklinesLine } from 'react-sparklines';
import colors from '../colors/colors';

{/* DIDN'T WORK FOR SOME REASON ! */}

const StatusGraph = () => {
    return (
        <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5}>
            <SparklinesLine color={colors.primaryBlue} />
        </Sparklines>
    )
}

export default StatusGraph;